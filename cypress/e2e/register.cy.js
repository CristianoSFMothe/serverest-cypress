/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const data = require("../fixtures/data.json");

describe("Create an accountt", () => {
  beforeEach(() => {
    cy.homePage();

    cy.createAccount();
  });

  it("Register a user with administrator privileges", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password(12);

    cy.fillAdminFields(name, email, password);

    cy.registrationSuccessMessage("Cadastro realizado com sucesso");

    cy.successfulAdminRegistration(
      "Este é seu sistema para administrar seu ecommerce.",
      name
    );
  });

  it("Register a common user", () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password(12);

    cy.fillFields(name, email, password);

    cy.registrationSuccessMessage("Cadastro realizado com sucesso");

    cy.registrationSuccessMessage("Serverest Store");

    cy.successfulRegistration("Serverest Store");
  });

  context("Try to register", () => {
    it("Try to register a user with an existing email", () => {
      const name = faker.person.fullName();
      const password = faker.internet.password(12);

      cy.fillFields(name, data.existing_email.email, password);

      cy.messageErro("Este email já está sendo usado");
    });

    context("Trying to register without filling in the fields", () => {
      it("Required fields name", () => {
        const email = faker.internet.email();
        const password = faker.internet.password(12);

        cy.emptyNameField(email, password);

        cy.messageErro("Nome é obrigatório");
      });

      it("Required fields email", () => {
        const name = faker.person.fullName();
        const password = faker.internet.password(12);

        cy.emptyEmailField(name, password);

        cy.messageErro("Email é obrigatório");
      });

      // TODO: resolve

      // it.only("Required fields", () => {
      //   cy.emptyField();

      //   cy.messageErro("Nome é obrigatório");
        
      //   cy.messageErro("Email é obrigatório");

      //   cy.messageErro("Password é obrigatório");

      // });
    });
  });
});
