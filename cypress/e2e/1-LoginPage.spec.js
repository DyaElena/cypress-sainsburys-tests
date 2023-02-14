describe("Login", () => {
  beforeEach("open website", () => {
    cy.visit("gol/login?login_challenge=9c1fa0646c9a489db2b1c0376ba58316");
    cy.contains("Accept All Cookies").click();
  });

  it.only("greets with Log in", () => {
    cy.get("h1").should("contain", "Log in");
  });

  it("links to #/register", () => {
    cy.contains("Register here").should(
      "have.attr",
      "href",
      "/gol/email-verification"
    );
  });

  it("requires email", () => {
    cy.get("#username").click();
    cy.get("#password").click();
    cy.contains("button", "Log in").should("be.disabled");
    cy.get("#usernameValidation")
      .should("be.visible")
      .and("contain", "Email address is required");
  });

  it("requires password", () => {
    cy.get("#password").click();
    cy.get("#username").click();
    cy.contains("button", "Log in").should("be.disabled");
    cy.get("#passwordValidation")
      .should("be.visible")
      .and("contain", "Password is required");
  });

  it("navigate to Home page on successful login", () => {
    cy.get("#username").type("test@gmail.com");
    cy.get("#password").type("TestTest123!");
    cy.get('[data-testid="log-in"]').click();
    cy.url().should("https://www.sainsburys.co.uk/shop/gb/groceries");
  });

  it("navigate to Home page on successful login with uppercase/lowercase email", () => {
    cy.get("#username").type("TEST@gmail.com");
    cy.get("#password").type("TestTest123!");
    cy.get('[data-testid="log-in"]').click();
    cy.url().should("eq", "https://www.sainsburys.co.uk/shop/gb/groceries"); // check that re-directed to the home page
  });

  it("requires email to be registered first", () => {
    cy.get("#username").type("doesntexist@gmail.com");
    cy.get("#password").type("TestTest123!");
    cy.get('[data-testid="log-in"]').click();
    cy.get('[data-testid="notification-message"]')
      .should("be.visible")
      .and("contain", "That email or password doesn’t look right.");
  });

  it("requires valid email and password", () => {
    cy.get("#username").type("test@gmail.com");
    cy.get("#password").type("TTestTest123!");
    cy.get('[data-testid="log-in"]').click();
    cy.get('[data-testid="notification-message"]')
      .should("be.visible")
      .and("contain", "That email or password doesn’t look right.")
      .and("contain", "Reset password");
  });
});
