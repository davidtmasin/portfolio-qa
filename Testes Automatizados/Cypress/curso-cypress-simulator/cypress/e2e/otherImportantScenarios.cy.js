/// <reference types="cypress"/>

describe("template spec", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("./src/index.html?skipCaptcha=true&chancesOfError=0", {
      onBeforeLoad(windowBrowser) {
        windowBrowser.localStorage.setItem("cookieConsent", "accepted");
      },
    });
  });

  //A partir deste próximo caso de teste, daremos início àqueles não-essenciais porém, necessários.
  it("logs out successfully", () => {
    cy.get("#sandwich-menu").click();

    cy.contains("button", "Logout").should("be.visible").click();

    cy.contains("h2", "Let's get started!").should("be.visible");
    cy.contains("button", "Login").should("be.visible");
    cy.get("#sandwich-menu").should("not.be.visible");
  });

  it("shows and hides the logout button", () => {
    cy.get("#sandwich-menu").click();

    cy.contains("button", "Logout").should("be.visible");

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
    cy.contains("button", "Running...", { timeout: 6000 }).should("not.exist");
    cy.contains("button", "Run").should("be.visible");
    cy.contains("#outputArea", "Running... Please wait.", {
      timeout: 6000,
    }).should("not.exist");
    cy.get("#outputArea")
      .should("contain", "Success")
      .and("contain", "cy.visit() // Visited URL");
  });

  it("checks the run button disabled and enabled states", () => {
    cy.contains("#runButton", "Run").should("be.disabled");

    cy.get('textarea[placeholder="Write your Cypress code here..."]').type(
      "help"
    );

    cy.contains("#runButton", "Run").should("be.enabled");

    cy.get('textarea[placeholder="Write your Cypress code here..."]').clear();

    cy.contains("#runButton", "Run").should("be.disabled");
  });

  it("clears the code input when logging off then logging in again", () => {
    cy.get("textarea[placeholder='Write your Cypress code here...']").type(
      "cy.log('Oi, meu chapa!')"
    );

    cy.get("#sandwich-menu").click();
    cy.contains("button", "Logout").click();
    cy.contains("button", "Login").click();

    cy.get("textarea[placeholder='Write your Cypress code here...']").should(
      "have.value",
      ""
    );
  });

  it("disables the run button when logging off then logging in again", () => {
    cy.get("textarea[placeholder='Write your Cypress code here...']").type(
      "cy.log('Oi, meu chapa!')"
    );

    cy.contains("#runButton", "Run").should("be.enabled");

    cy.get("#sandwich-menu").click();
    cy.contains("button", "Logout").click();
    cy.contains("button", "Login").click();

    cy.contains("#runButton", "Run").should("be.disabled");
  });

  it("clears the code output when logging off then logging in again", () => {
    cy.run("cy.log('Oi, meu chapa!')");

    cy.get("#outputArea", { timeout: 6000 })
      .should("contain", "Success:")
      .and(
        "contain",
        "cy.log('Oi, meu chapa!') // Logged message 'Oi, meu chapa!'"
      )
      .should("be.visible");

    cy.get("#sandwich-menu").click();
    cy.contains("button", "Logout").click();
    cy.contains("button", "Login").click();

    cy.get("#outputArea").should("not.contain", "cy.log('Oi, meu chapa!')");
  });

  it("doesn't show the cookie consent banner on the login page", () => {
    cy.clearAllLocalStorage();
    cy.reload();

    cy.contains("button", "Login").should("be.visible");

    cy.get("#cookieConsent").should("not.be.visible");
  });
});
