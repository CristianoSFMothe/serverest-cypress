/// <reference types="cypress" />

Cypress.Commands.add("createAccount", () => {
  cy.get(".btn-link").should("have.text", "Cadastre-se").click();
});

Cypress.Commands.add("fillAdminFields", (name, email, password) => {
  cy.get("#nome").type(name).should("have.value", name);

  cy.get("#email").type(email).should("have.value", email);

  cy.get("#password")
    .type(password, { log: false })
    .should("have.value", password);

  cy.get("#administrador").check().should("be.checked");

  cy.get(".btn-primary").should("have.text", "Cadastrar").click();
});

Cypress.Commands.add("registrationSuccessMessage", (msg) => {
  cy.get(".alert").should("be.visible", msg);
});

Cypress.Commands.add("successfulAdminRegistration", (text, name) => {
  cy.contains("h1", `Bem Vindo ${name}`).should("be.visible");

  cy.get(".lead").should("have.text", text);
});

Cypress.Commands.add("fillFields", (name, email, password) => {
  cy.get("#nome").type(name).should("have.value", name);

  cy.get("#email").type(email).should("have.value", email);

  cy.get("#password")
    .type(password, { log: false })
    .should("have.value", password);

  cy.get(".btn-primary").should("have.text", "Cadastrar").click();
});

Cypress.Commands.add("successfulRegistration", (text) => {
  cy.contains("h1", text).should("be.visible");
});

Cypress.Commands.add("messageErro", (text) => {
  cy.get(".alert > span").should("have.text", text);
});

Cypress.Commands.add("emptyNameField", (email, password) => {
  cy.get("#email").type(email).should("have.value", email);

  cy.get("#password")
    .type(password, { log: false })
    .should("have.value", password);

  cy.get(".btn-primary").should("have.text", "Cadastrar").click();
});

Cypress.Commands.add("emptyEmailField", (name, password) => {
  cy.get("#nome").type(name).should("have.value", name);

  cy.get("#password")
    .type(password, { log: false })
    .should("have.value", password);

  cy.get(".btn-primary").should("have.text", "Cadastrar").click();
});

Cypress.Commands.add("emptyField", () => {
  cy.get(".btn-primary").should("have.text", "Cadastrar").click();
});
