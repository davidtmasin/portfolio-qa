/// <reference types="cypress"/>
describe("Cypress Simulator - A11y Checks", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("./src/index.html?skipCaptcha=true&chancesOfError=0", {
      onBeforeLoad(windowBrowser) {
        windowBrowser.localStorage.setItem("cookieConsent", "accepted");
      },
    });
    cy.injectAxe();
  });

  it("successfully simulates a Cypress command (e.g., cy.log('Yay!'))", () => {
    cy.run("cy.log('Yay!')");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Success:")
      .and("contain", "cy.log('Yay!') // Logged message 'Yay!'")
      .and("be.visible");

    //verificação da acessibilidade em um elemento específico via sua classe CSS
    cy.checkA11y(".success");
  });

  it("shows an error when entering and running an invalid Cypress command (e.g., cy.run())", () => {
    cy.run("cy.run()");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Error:")
      .and("contain", "Invalid Cypress command: cy.run()")
      .and("be.visible");

    cy.checkA11y(".error");
  });

  it("shows a warning when entering and running a not-implemented Cypress command (e.g., cy.contains('Login'))", () => {
    cy.run("cy.contains('Login')");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Warning:")
      .and("contain", "The `cy.contains` command has not been implemented yet.")
      .and("be.visible");

    cy.checkA11y(".warning");
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

    cy.checkA11y("#outputArea");
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

    cy.checkA11y();

    cy.get("@btnExpandCollapse").click();

    cy.get("@btnExpandCollapse").should("have.attr", "aria-expanded", "false");
    cy.get("#expandIcon").should("be.visible");

    cy.checkA11y();
  });

  it("logs out successfully", () => {
    cy.get("#sandwich-menu").click();
    cy.contains("button", "Logout").should("be.visible").click();

    cy.contains("h2", "Let's get started!").should("be.visible");
    cy.contains("button", "Login").should("be.visible");
    cy.get("#sandwich-menu").should("not.be.visible");

    cy.checkA11y();
  });

  it("shows and hides the logout button", () => {
    cy.get("#sandwich-menu").click();

    cy.contains("button", "Logout").should("be.visible");

    cy.checkA11y();

    cy.get("#sandwich-menu").click();

    cy.contains("button", "Logout").should("not.be.visible");
  });

  it("shows the running state before showing the final result", () => {
    cy.contains("button", "Run").should("have.attr", "disabled");

    cy.get("#codeInput").type("cy.visit()");

    cy.contains("button", "Run").should("not.have.attr", "disabled");

    cy.contains("button", "Run").click();

    cy.contains("button", "Running...")
      .should("be.visible")
      .and("have.attr", "disabled");
    cy.contains("#outputArea", "Running... Please wait.").should("be.visible");

    cy.checkA11y();

    cy.contains("button", "Running...", { timeout: 6000 }).should("not.exist");
    cy.contains("button", "Run").should("be.visible");
    cy.contains("#outputArea", "Running... Please wait.", {
      timeout: 6000,
    }).should("not.exist");
    cy.get("#outputArea")
      .should("contain", "Success")
      .and("contain", "cy.visit() // Visited URL");
  });
});

describe("Cookie consent - A11y Checks", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("./src/index.html?skipCaptcha=true");
    cy.injectAxe();
  });

  it("consents on the cookies usage", () => {
    cy.get("#cookieConsent").as("cookieConsentBanner").should("be.visible");

    cy.checkA11y();

    cy.get("@cookieConsentBanner").find("button:contains('Accept')").click();

    cy.get("@cookieConsentBanner").should("not.be.visible");
    cy.window()
      .its("localStorage.cookieConsent")
      .should("be.equal", "accepted");
  });
});

describe("Captcha - A11y Checks", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
    cy.contains("button", "Login").click();
    cy.injectAxe();
  });

  it("finds no a11y issues on all captcha view states (button enabled/disabled and error)", () => {
    cy.contains("button", "Verify").should("be.disabled");

    cy.get("input[placeholder='Enter your answer']").type("1000");

    cy.contains("button", "Verify").should("be.enabled");

    cy.checkA11y();

    //...
    cy.contains("button", "Verify").click();

    cy.contains(".error", "Incorrect answer, please try again.").should(
      "be.visible"
    );
    cy.get("input[placeholder='Enter your answer']").should("be.empty");
    cy.contains("button", "Verify").should("be.disabled");

    cy.checkA11y();
  });
});
