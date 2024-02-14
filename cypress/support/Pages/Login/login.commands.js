/// <reference types="cypress" />

const data = require("../../../fixtures/data.json");

Cypress.Commands.add("login", (email, password) => {
  cy.get("#email").type(email).should("have.value", email);

  cy.get("#password")
    .type(password, { log: false })
    .should("have.value", password);

  cy.loginButton("Entrar");

  cy.successfulAdminRegistration(
    "Este é seu sistema para administrar seu ecommerce.",
    data.user.name
  );
});

Cypress.Commands.add('logout',  () => {
  cy.contains('button', 'Logout').should("be.visible").click()
} );
