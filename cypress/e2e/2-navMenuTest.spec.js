describe("nav menu test", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.sainsburys.co.uk/gol-ui/recipes");
    cy.contains("Accept All Cookies").click();
  });

  it("verify nav menu", () => {
    cy.get(".ln-o-inline-list >li").should("have.length", "9");
  });
});
