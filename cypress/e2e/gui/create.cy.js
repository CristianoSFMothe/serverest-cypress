/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const user = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const data = require("../../fixtures/data.json");

describe("User Registrations", () => {
  beforeEach(() => {
    cy.homePage();

    cy.login(data.user.email, data.user.password);
  });

  it("should register users", () => {
    cy.cardsTitle("Cadastrar Usuários");

    cy.cardButton("Cadastrar");

    cy.titlePage("Cadastro de usuários");

    cy.registerUserAdministrator(user.name, user.email, user.password);

    cy.cardButton("Cadastrar");

    context("should find the user record", () => {
      cy.findRecord(user.name);
    });
  });
});
