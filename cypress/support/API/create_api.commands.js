/// <reference types="cypress" />
const data = require("../../fixtures/data.json");

const user = {
  nome: data.user.name,
  email: data.user.email,
  password: data.user.password,
  administrador: data.user.administrador,
};

Cypress.Commands.add("createUserViaAPI", () => {
  const baseUrl = "https://serverest.dev";
  const apiEndpoints = {
    usuarios: "/usuarios",
  };

  const contentTypeJson = "application/json";

  const deleteUserIfExists = (email) => {
    cy.request({
      method: "GET",
      url: `${baseUrl}${apiEndpoints.usuarios}`,
      qs: { email },
    }).then((response) => {
      if (response.body.quantidade > 0) {
        const userId = response.body.usuarios[0]._id;
        cy.request({
          method: "DELETE",
          url: `${baseUrl}${apiEndpoints.usuarios}/${userId}`,
        });
      }
    });
  };

  const createUser = (userData) => {
    cy.request({
      method: "POST",
      url: `${baseUrl}${apiEndpoints.usuarios}`,
      headers: {
        accept: contentTypeJson,
        "content-type": contentTypeJson,
      },
      body: userData,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    });
  };

  deleteUserIfExists(user.email);
  createUser(user);
});