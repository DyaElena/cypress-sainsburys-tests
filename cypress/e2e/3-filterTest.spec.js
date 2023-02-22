describe("Search", () => {
  it("open website", () => {
    cy.visit(
      "https://www.sainsburys.co.uk/shop/gb/groceries/price-lock-/price-lock-drinks"
    );
    cy.contains("Accept All Cookies").click();

    //verify the page
    cy.get("h1").should("contain", "Drinks");

    //when we click on this container with text is not visible
    cy.get(".mAccordion-header").click();
    cy.get(".readMoreTarget").not("be.visible");

    //filter Rubicon drink
    Cypress.Commands.add("checkRubiconFilter", (listSelector, itemSelector) => {
      cy.get(listSelector)
        .find(itemSelector)
        .each(($item) => {
          cy.wrap($item).find(".productNameAndPromotions > h3 > a").as("name");
          cy.get("@name").should("contain", "Rubicon");
        });
    });

    cy.get(".field.topBrands").contains("Rubicon").click();
    cy.checkRubiconFilter(".productLister", "li");
  });
});
