/// <reference types="cypress" />

Cypress.Commands.add("registerUserAdministrator", (name, email, password) => {
  cy.get("#nome").type(name).should("have.value", name);

  cy.get("#email").type(email).should("have.value", email);

  cy.get("#password").type(password).should("have.value", password);

  cy.get("#administrador").check().should("be.checked");
});

Cypress.Commands.add("titlePage", (text) => {
  cy.contains("h1", text).should("be.visible");
});

Cypress.Commands.add("cardsTitle", (title) => {
  cy.get(".card-title").contains(title).should("exist");
});

Cypress.Commands.add("cardButton", (text) => {
  cy.get(".btn-primary").contains(text).should("exist").click();
});

Cypress.Commands.add("registerButton", (text) => {
  cy.get(".btn-primary").contains(text).should("exist").click();
});

Cypress.Commands.add("findRecord", (name) => {
  cy.get('.table').contains(name).should("exist")
});
