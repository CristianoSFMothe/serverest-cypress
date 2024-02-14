/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const data = require("../../fixtures/data.json");

describe("List users", () => {
  beforeEach(() => {
    cy.homePage();

    cy.login(data.user.email, data.user.password);
  });

  it("Should to display a users table", () => {
    cy.cardButton("Listar");    
  });
  
});
