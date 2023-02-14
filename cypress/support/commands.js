// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.visit("gol/login?login_challenge=9c1fa0646c9a489db2b1c0376ba58316");
  cy.contains("Accept All Cookies").click();

  cy.get("#username").type(email);
  cy.get("#password").type(password);
  cy.get('[data-testid="log-in"]').click();
  cy.url().should("eq", "https://www.sainsburys.co.uk/shop/gb/groceries"); // check that re-directed to the home page
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//Cypress.Commands.add("LoginToApplication", () => {

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
