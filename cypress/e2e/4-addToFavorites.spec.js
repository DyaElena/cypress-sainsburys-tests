describe("Login", () => {
  beforeEach("Login", () => {
    cy.session("luzefegy@finews.biz", () => {
      cy.visit(
        "https://www.sainsburys.co.uk/gol-ui/oauth/login?redirectUri=https%3A%2F%2Fwww.sainsburys.co.uk%2Fwebapp%2Fwcs%2Fstores%2Fservlet%2Fgb%2Fgroceries%3Fgclid%3DEAIaIQobChMIo-WSiImm_QIVF853Ch2EYwV9EAAYASAAEgK5svD_BwE%26storeId%3D10151%26langId%3D44%26krypto%3DxuEw53IBQ5AGnCL%252F%252BBK%252FdiOKfbq3bQrx4HTd9WT6MSrdifmGEqI1BrUbB4MLcjsZsUiVVq%252FnZhMZtPicbFtwggDfpg%252FvYhd%252BJBLAoTKZadS9xZS5QnQ%252FHygKp%252F8H9kIoxBz23JXTJ%252F4G7bSroJg1mmwD%252B1saGhGdCxyWpmjJU0rqekqTQRbAzhCQR0%252FLoI7N%26ddkey%3Dhttps%253Agb%252Fgroceries"
      );
      cy.contains("Accept All Cookies").click();
      cy.get("#username").type("luzefegy@finews.biz");
      cy.get("#password").type("Privetprivet1!");
      cy.get('[data-testid="log-in"]').click();
      cy.url().should("contain", "/MyAccount");
    });
  });

  it("add to fav", () => {
    cy.get('[data-test-id="product-tile-1304"]').find("button").click();
  });
});
