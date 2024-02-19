/// <reference types="cypress" />

describe("Create User Via API", () => {
  const baseUrl = "https://serverest.dev";
  const apiEndpoints = {
    usuarios: "/usuarios",
  };
  const contentTypeJson = "application/json";
  const user = {
    nome: "Fulano da Silva",
    email: "beltrano@qa2.com.br",
    password: "teste",
    administrador: "true",
  };

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

  it("Should create a new user via API", () => {
    deleteUserIfExists(user.email);
    createUser(user);
  });
});
