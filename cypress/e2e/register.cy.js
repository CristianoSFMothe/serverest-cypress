/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Create an accountt", () => {
  beforeEach(() => {
    cy.homePage();
  });

  it("Given that registers an account as administered", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password(12);

    cy.createAccount();

    cy.fillAdminFields(name, email, password);

    cy.registrationSuccessMessage("Cadastro realizado com sucesso");

    cy.successfulAdminRegistration(
      "Este é seu sistema para administrar seu ecommerce.",
      name
    );
  });
});
