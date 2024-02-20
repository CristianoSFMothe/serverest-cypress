/// <reference types="cypress" />

const data = require("../../fixtures/data.json");

describe("Edit registered user", () => {
  beforeEach(() => {
    cy.homePage();

    cy.login(data.user.email, data.user.password);
  });

  it("should edit user", () => {
    cy.cardsTitle("Listar Usuários");

    cy.cardButton("Listar");

    cy.titlePage("Lista dos usuários");

    // cy.registerUserAdministrator(user.name, user.email, user.password);

    // cy.cardButton("Cadastrar");

    // context("should find the user record", () => {
    //   cy.findRecord(user.name);
    // });
  });
});
