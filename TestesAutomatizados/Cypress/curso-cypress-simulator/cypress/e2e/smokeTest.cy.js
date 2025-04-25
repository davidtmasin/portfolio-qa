/// <reference types="cypress"/>

describe("Cypress Simulator - Smoke Test", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("./src/index.html?skipCaptcha=true&chancesOfError=0", {
      onBeforeLoad(windowBrowser) {
        windowBrowser.localStorage.setItem("cookieConsent", "accepted");
      },
    });
  });

  it("successfully simulates a Cypress command (e.g., cy.log('Yay!'))", () => {
    // cy.get("textarea[placeholder='Write your Cypress code here...']").type(
    //   "cy.log('Yay!')"
    // );
    // cy.contains("button", "Run").click();
    cy.run("cy.log('Yay!')");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Success:")
      .and("contain", "cy.log('Yay!') // Logged message 'Yay!'")
      .and("be.visible");
  });

  it("shows an error when entering and running an invalid Cypress command (e.g., cy.run())", () => {
    cy.run("cy.run()");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Error:")
      .and("contain", "Invalid Cypress command: cy.run()")
      .and("be.visible");
  });

  it("shows a warning when entering and running a not-implemented Cypress command (e.g., cy.contains('Login'))", () => {
    cy.run("cy.contains('Login')");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Warning:")
      .and("contain", "The `cy.contains` command has not been implemented yet.")
      .and("be.visible");
  });

  it("shows a an error when entering and running a valid Cypress command without parentheses (e.g., cy.visit)", () => {
    cy.run("cy.visit");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Error:")
      .and("contain", "Missing parentheses on `cy.visit` command")
      .and("be.visible");
  });

  it("asks for help and gets common Cypress commands and examples with a link to the docs", () => {
    cy.run("help");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Common Cypress commands and examples:")
      .and(
        "contain",
        "For more commands and details, visit the official Cypress API documentation."
      )
      .and("be.visible");

    cy.contains("#outputArea a", "official Cypress API documentation")
      .should(
        "have.attr",
        "href",
        "https://docs.cypress.io/api/table-of-contents"
      )
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noopener noreferrer")
      .and("be.visible");
  });

  it("maximizes and minimizes a simulation result", () => {
    cy.run("help");

    cy.get(".expand-collapse")
      .as("btnExpandCollapse")
      .should("have.attr", "aria-expanded", "false");
    cy.get("#expandIcon").should("be.visible");

    cy.get("@btnExpandCollapse").click();

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Common Cypress commands and examples:")
      .and(
        "contain",
        "For more commands and details, visit the official Cypress API documentation."
      )
      .and("be.visible");
    cy.get("@btnExpandCollapse").should("have.attr", "aria-expanded", "true");
    cy.get("#collapseIcon").should("be.visible");

    cy.get("@btnExpandCollapse").click();

    cy.get("@btnExpandCollapse").should("have.attr", "aria-expanded", "false");
    cy.get("#expandIcon").should("be.visible");
  });
  // Até este último caso de teste acima, temos uma ótima cobertura para um possível Smoke Test.
});
