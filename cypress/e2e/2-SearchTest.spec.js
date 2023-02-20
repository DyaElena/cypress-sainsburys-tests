describe("Recipes", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.sainsburys.co.uk/gol-ui/recipes");
    cy.contains("Accept All Cookies").click();
  });

  it.only("verify page", () => {
    cy.url().should("contain", "recipes");

    cy.get(".nav__menu-wrapper")
      .contains("Recipes")
      .should("have.class", "nav__menu-link--selected");
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
