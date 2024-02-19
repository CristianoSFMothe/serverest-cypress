/// <reference types="cypress" />

describe("List Users Via API", () => {
  const baseUrl = "https://serverest.dev";
  const apiEndpoints = {
    usuarios: "/usuarios",
  };
  const contentTypeJson = "application/json";

  const listUsers = () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}${apiEndpoints.usuarios}`,
      headers: {
        accept: contentTypeJson,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("usuarios");
    });
  };

  it("Should list all users via API", () => {
    listUsers();
  });
});
