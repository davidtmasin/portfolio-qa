/// <reference types="cypress" />

describe("Cypress Intermediário V2 - Login", () => {
  it("logs in successfully", () => {
    const data = {
      user: Cypress.env("user_name"),
      password: Cypress.env("user_password"),
      options: { cacheSession: false },
    };

    cy.loginOptimized(data.user, data.password, data.options);

    cy.get(".qa-user-avatar", { timeout: 6000 }).should("be.visible");
  });
});
