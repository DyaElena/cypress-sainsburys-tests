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

    //filter Rubicon drinks
    cy.get(".field.topBrands").contains("Rubicon").click();
    cy.get(".productLister > li").each(($item) => {
      cy.wrap($item)
        .find(" .productNameAndPromotions > h3 > a")
        .as("description");

      cy.wait(3000);

      cy.get("@description").should("contain", "Rubicon");
    });
  });
});
