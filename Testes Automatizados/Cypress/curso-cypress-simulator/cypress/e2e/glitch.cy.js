/// <reference types="cypress" />

describe("Cypress Simulator - Glitch in the Matrix", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("./src/index.html?skipCaptcha=true&chancesOfError=1", {
      onBeforeLoad(windowBrowser) {
        windowBrowser.localStorage.setItem("cookieConsent", "accepted");
      },
    });
  });

  it("errors out with a glitch in the Matrix", () => {
    cy.run("cy.visit('http://example.com')");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "There's a glitch in the Matrix")
      .and("be.visible");
  });
});
