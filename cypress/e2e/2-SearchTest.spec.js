describe("Search", () => {
  it("open website", () => {
    cy.visit(
      "https://www.sainsburys.co.uk/shop/gb/groceries/price-lock-/price-lock-drinks?fromMegaNav=1"
    );
    cy.contains("Accept All Cookies").click();

    /*
    // verify the page
    //cy.get("h1").should("contain", "Drinks");

    // when we click on this container with text is not visible
    cy.get(".mAccordion-header").click();
    cy.get(".readMoreTarget").not("be.visible");
    */

    // filter drinks
    const options = [
      "Sainsbury's",
      "Rubicon",
      "Lucozade",
      "Nescafe",
      "Coca-Cola",
    ];

    cy.get(".field.topBrands").contains("Rubicon").click();
    /* cy.get(".productLister.gridView")
      .find("li")
      .each((item, index, list) => {
        cy.wrap(item).should("contain", "Rubicon");
      });
  */
    cy.get(".productNameAndPromotions").eq(0).should("contain", "Rubicon");
  });
});
