describe("Recipes", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.sainsburys.co.uk/gol-ui/recipes");
    cy.contains("Accept All Cookies").click();
  });

  it("verify page", () => {
    cy.url().should("contain", "recipes");

    cy.get(".nav__menu-wrapper")
      .contains("Recipes")
      .should("have.class", "nav__menu-link--selected");
  });

  it.only("load more for 10 minutes recipes", () => {
    cy.contains("Quick and easy").click();
    cy.get(".recipes_browse__dropdown_view__list")
      .contains("10 minutes")
      .click();

    let numItems = 0;
    let prevNumItems = 0;
    let maxIterations = 4; // Set a maximum number of iterations
    let iteration = 0;

    function loadMore() {
      iteration++;
      cy.get(
        "[class='ln-o-grid ln-o-grid--matrix ln-o-grid--equal-height'] > div"
      ).then(($items) => {
        numItems = $items.length;
        if (numItems === prevNumItems || iteration >= maxIterations) {
          // All items are loaded or reached the maximum number of iterations
          return;
        }
        prevNumItems = numItems;
        cy.get('[data-test-id="show-more-button"]').click();
      });

      // Check if the "Show more" button is visible
      cy.get('[data-test-id="show-more-button"]').then(($button) => {
        if (!$button.is(":visible") || iteration >= maxIterations) {
          // All items are loaded or reached the maximum number of iterations
          return;
        }
        cy.wait(1000); // Wait for new items to load
        loadMore(); // Call the function again for the next iteration
      });
    }

    loadMore(); // Call the function for the first time
  });

  it("verify correct cooking time filter", () => {
    const cookingTimeFilter = ["10 minutes", "20 minutes", "30 minutes"];
    cookingTimeFilter.forEach((cookingTime) => {
      cy.contains("Quick and easy").click();
      cy.get(".recipes_browse__dropdown_view__list")
        .contains(cookingTime)
        .click();

      cy.wait(2000);
      cy.get(
        '[class = "ln-o-grid__item ln-u-12/12@xs ln-u-6/12@md ln-u-4/12@lg"]'
      ).contains(cookingTime);
    });
  });

  it("verify search results", () => {
    const searchFor = ["rice", "pasta", "salad", "pizza", "rice", "salmon"];

    searchFor.forEach((category) => {
      cy.get("#recipes-search-bar-input").type(`${category}{enter}`);
      cy.get(".show-more > .ln-c-button").click();

      cy.wait(2000);

      cy.get(".recipes-search-results__tabs")
        .find(".recipe-tile__title-block")
        .should("contain", category);
      cy.get("#recipes-search-bar-input").clear();
    });
  });
});
