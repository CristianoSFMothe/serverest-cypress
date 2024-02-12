/// <reference types="cypress" />

const data = require("../fixtures/data.json");

describe("Login", () => {
  beforeEach(() => {
    cy.homePage();
  });

  it("Login Successfully", () => {
    cy.login(data.user.email, data.user.password);
  });
});
