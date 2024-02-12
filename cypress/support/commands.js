/// <reference types="cypress" />

Cypress.Commands.add("homePage", () => {
  cy.visit("/").get(".font-robot").should("have.text", "Login");
});

Cypress.Commands.add("loginButton", (txt) => {
  cy.get(".btn-primary").should("have.text", txt).click();
});
