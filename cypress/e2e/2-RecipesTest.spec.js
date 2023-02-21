describe("Recipes", () => {
  beforeEach("open website", () => {
    cy.visit(
      "https://www.sainsburys.co.uk/shop/gb/groceries/drinks?fromMegaNav=1"
    );

    cy.contains("Accept All Cookies").click();
  });

  it("verify page", () => {
    cy.url().should("contain", "recipes");

    cy.get(".nav__menu-wrapper")
      .contains("Recipes")
      .should("have.class", "nav__menu-link--selected");
  });

  /* WORKING ON IT
    function loadAllResults() {
     document.getElementById("#show-more-button");
      }
      
  it.only("load more", () => {
    cy.contains("Quick and easy").click();
    cy.get(".recipes_browse__dropdown_view__list")
      .contains("10 minutes")
      .click();
      if (button.is(":visible")) {
        loadAllResults().click();
        cy.wait(2000);
      
    });
  });
*/

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
