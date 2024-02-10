/// <reference types="cypress" />

Cypress.Commands.add("homePage", () => {
  cy.visit("/").get(".font-robot").should("have.text", "Login");
});
