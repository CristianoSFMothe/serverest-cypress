/// <reference types="cypress" />

describe("Create User Via API", () => {
  it("Should create a new user via API", () => {
    cy.createUserViaAPI();
  });
});