Cypress.Commands.add("login", (email, password) => {
  cy.get("#email").type(email).should("have.value", email);

  cy.get("#password")
    .type(password, { log: false })
    .should("have.value", password);    
});
