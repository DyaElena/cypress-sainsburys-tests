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
  /*cy.visit("gol/login?login_challenge=9c1fa0646c9a489db2b1c0376ba58316");
  cy.contains("Accept All Cookies").click();

  cy.get("#username").type(email);
  cy.get("#password").type(password);
  cy.get('[data-testid="log-in"]').click();
  cy.url().should("eq", "https://www.sainsburys.co.uk/shop/gb/groceries"); // check that re-directed to the home page
  */
  cy.request({
    method: "POST",
    url: "https://report.sainsburys.gbqofs.io/reporting/9e2d32e9-709d-e97d-0c04-748961f50451/cls_report?clsjsv=6.6.64B137&_cls_s=4ca7a9e7-9075-4a00-bb7a-9e3b2d6c7405:0&_cls_v=1a124ad9-091a-4134-85a7-23003b50102b&pid=3d77ba5f-6b51-4893-a771-32f53f507746&sn=1&cfg=79e3f6b5&pv=2&aid=",
    body: {
      pv: 2,
      clss: "4ca7a9e7-9075-4a00-bb7a-9e3b2d6c7405:0",
      clsv: "1a124ad9-091a-4134-85a7-23003b50102b",
      clse: null,
      conf: null,
      usage: { sessionQuotaBreach: false, apiCallQuotaBreach: false },
    },
  }).then((resp) => {
    window.localStorage.setItem(
      "access_token",
      "eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzowOTk5OGU0Ny02M2U2LTRkZTktOTEzYS03MjJjMjVkOGMxZjMifQ.eyJhdWQiOlsiZ29sLnNhaW5zYnVyeXMuY28udWsiLCJhY2NvdW50LnNhaW5zYnVyeXMuY28udWsiXSwiY2xpZW50X2lkIjoiZ29sIiwiZXhwIjoxNjc2MzUxOTIzLCJleHQiOnt9LCJpYXQiOjE2NzYzNDgzMjMsImlzcyI6Imh0dHBzOi8vYWNjb3VudC5zYWluc2J1cnlzLmNvLnVrLyIsImp0aSI6Ijk2ZDhmN2ZjLTBhOTMtNGNiNy05Y2UyLWFjN2Q3ZWI1MzBkMCIsIm5iZiI6MTY3NjM0ODMyMywic2NwIjpbIm9wZW5pZCIsIm9mZmxpbmUiLCJnb2wtc2Vzc2lvbiJdLCJzdWIiOiI5MWMwY2ZlMi1hMjU5LTQ4MjctOWM5Ni01NTQ2NWRiMDg3M2IifQ.mV97bmBLSrSeAylc3A3WuL72LKNvP4IFf4-Js4ZxCZEMu2gFbm9BEJwVwCsdShxJMx5ycq791t0ADyw-DlQD2ImrsUMZvP-Sdevx9olGAt7XgKxFW3JoXLhJzYtBnEwD0aUM9BSKSGR0g1UN6LWQLlPp11E__Biqz6tlMfZbsSptWTVnSG343dLPsOZdhC-vq7qlufXWtsQbw02ISK9mgwqTXlYF7zF_5qb5zM8CT-lg1dQkNN5oAXXAEXq-pncQS2jlyE9UV5JeEAHMcmqnw_hTzP04Xi1V7vJ-fgOSxAKXiFsi8rTbL6Kf7ucsuIhZPFr6a0K5V7swC6ko2WqC3EZHpLiLiXTfOWcFnmkfUeZso4All27PH-_Zo_ysHgFVuh1yMc-5q1cgPPQY4S7sVkgO7nKfUhX9q_XjZDtGVuYDqB3Ch7YdM9ifY570SV2rDXCMi9vETLDWnFkKeZoCNnpdw35iwQJv3gfbWkW_uOfQ3DQlK_SJCcv3-ORLp9TvCz6PsGBK8yVMD3fgcv_rBfZign6z8gRamqg2SEIzstKfbxTmgHOwhWsYNzYjcXksNk0cvgJKnTtM2SFkVAesMOPt4yMjfj6XqSzF927qGwURWpUo3Fsi-GXpDEQIAGT_c-mtg2sHmbt_MmSOpXt588l8AjIZLrgdmtspNOfbSds"
    );
    window.localStorage.setItem(
      "id_token",
      "eyJhbGciOiJSUzI1NiIsImtpZCI6InB1YmxpYzo3M2EzNmMxNC0xZDk2LTQwMGQtYTA5Ny0xMTFjMGJiYjE2NjUifQ.eyJhdF9oYXNoIjoid0EwbEZlVkNLRnNrckQ2dnpvbTU5ZyIsImF1ZCI6WyJnb2wiXSwiYXV0aF90aW1lIjoxNjc2MzQ4MzIwLCJleHAiOjE2NzYzNTE5MjMsImlhdCI6MTY3NjM0ODMyMywiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LnNhaW5zYnVyeXMuY28udWsvIiwianRpIjoiYzhjMGFmMmQtNDY2Mi00ZDZlLWE1MWMtZTliMjBiMGQ2ZDQyIiwicmF0IjoxNjc2MzQ4MzEzLCJzaWQiOiIyM2IzOGVjZC1kMWNhLTQ0YzUtOGFhOS0xMjljNTk2MTQwMGQiLCJzdWIiOiI5MWMwY2ZlMi1hMjU5LTQ4MjctOWM5Ni01NTQ2NWRiMDg3M2IifQ.gyolyXIuS9ZCj0kUfH14szIuYw_7iFtGVEtIuR-j8GLDoXgFpZy0n7OQcbankT15Ng95DbUqwSxUXABbDz3yPiI2GAatT8mizDCaPKhknDOZK7Fbnqlo7YkCA6ZWb1ljEm5fNt7E6a7LsJYaYqmGRrCIl5amTZ-z1SYa39XZbHtec1bIeMzNJKqiRCz0fG0WL1lAwXmzkgDdD1XWwS2hPDDVbToFKh2T5b-UU-WWYQD_TOGReotfFXUi2ESgOKQNFzde3lOB_SUUI6LX0s3yAoNgMrdMCfEeHs-_UqW3NxkcQZ5tg6q16yIU0wqUNj8BeHkH7BIAgjQxnuYLLARtxfqYKbwGnVS1jKNcbSbjuPk2pMzZMouzaoImHntHNjkIRQZcXjOTCBBCNnAS6ure_YCjH4-iPce3fB5C4qmgcfhHSWt23Jk5j-ygrO2yk6JpS3wGhDMu7do8ARiEIEQCl_0eWFHifJAnywt7sLwkA6cJHaaxft0QhD23teKeb8WsFcU2GaNrMYLcZT9Qzrkn7LJUItDpjdJrvJcbYw2kwGEqhg8SqQ5mao79U0jbUxGmGhqnw7A2jtwVbWScF69cq5H_dIDsD3BkIGzbWf2G5yTqJ6CbeQR_puXbsC37HXjHimEH_IugjQAjY7-LZauGAAMMKjatNryeG8NMcXWx0GQ"
    );
  });
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
