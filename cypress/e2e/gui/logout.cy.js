/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const data = require("../../fixtures/data.json");

describe("Logout", () => {
  beforeEach(() => {
    cy.homePage();

    cy.login(data.user.email, data.user.password);
  });

  it("Should logout", () => {
    cy.logout()
  });
  
});
