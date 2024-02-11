/// <reference types="cypress" />

const data = require("../fixtures/data.json");

describe('Login', () => {
    beforeEach(() => {
      cy.homePage();
    });

    it("Login Successfully", () => {
      cy.login(data.user.email, data.user.password)

      cy.button("Entrar");

      cy.successfulAdminRegistration(
        "Este é seu sistema para administrar seu ecommerce.",
        data.user.name
      );
    })
});