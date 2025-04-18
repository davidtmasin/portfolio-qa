/// <reference types="cypress"/>

describe("Cypress Simulator - Captcha", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
    cy.contains("button", "Login").click();
  });

  it("disables the captcha verify button when no answer is provided or it's cleared", () => {
    cy.contains("button", "Verify").should("be.disabled");

    cy.get("input[placeholder='Enter your answer']").type("1");

    cy.contains("button", "Verify").should("be.enabled");

    cy.get("input[placeholder='Enter your answer']").clear();

    cy.contains("button", "Verify").should("be.disabled");
  });

  it("shows an error on a wrong captcha answer and goes back to its initial state", () => {
    cy.get("input[placeholder='Enter your answer']").type("100");
    cy.contains("button", "Verify").click();

    cy.contains(".error", "Incorrect answer, please try again.").should(
      "be.visible"
    );
    cy.get("input[placeholder='Enter your answer']").should("be.empty");
    cy.contains("button", "Verify").should("be.disabled");
  });
});
