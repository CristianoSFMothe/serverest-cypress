/// <reference types="cypress" />

const data = require("../../fixtures/data.json");

describe("Edit registered user", () => {
  beforeEach(() => {
    cy.homePage();

    cy.login(data.user.email, data.user.password);
  });

  // TODO: cria o método para cadastra pela a API antes de lista para excluir
  it("should edit user", () => {
    cy.cardsTitle("Listar Usuários");

    cy.createUserViaAPI();

    cy.cardButton("Listar");

    cy.titlePage("Lista dos usuários");

    // ! Refatorar
    // cy.get(".table")
    //   .should("be.visible")
    //   .as("table")
    //   .within(() => {
    //     cy.get("td")
    //       .contains("beltrano@qa2.com.br")
    //       .parent()
    //       .find("button")
    //       .contains("button", "Excluir")
    //       .click();
    //   });
    
  });
});
