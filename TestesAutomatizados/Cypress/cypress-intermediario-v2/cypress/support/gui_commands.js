//Login padrão - sem uso do comando cy.session()
Cypress.Commands.add(
  "login",
  (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password")
  ) => {
    const login = () => {
      cy.visit("/users/sign_in");

      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,
      });
      cy.get("[data-qa-selector='sign_in_button']").click();
    };

    login();
  }
);

//Login otimizado - com uso do comando cy.session()
Cypress.Commands.add(
  "loginOptimized",
  (
    user = Cypress.env("user_name"),
    password = Cypress.env("user_password"),
    { cacheSession = true } = {}
  ) => {
    const login = () => {
      cy.visit("/users/sign_in");

      cy.get("[data-qa-selector='login_field']").type(user);
      cy.get("[data-qa-selector='password_field']").type(password, {
        log: false,
      });

      cy.get("[data-qa-selector='sign_in_button']").click();
    };

    const validate = () => {
      cy.visit("/");
      cy.location("pathname", { timeout: 1000 }).should(
        "not.eq",
        "/users/sign_in"
      );
    };

    const options = {
      cacheAcrossSpecs: true,
      validate,
    };

    if (cacheSession) {
      cy.session(user, login, options);
    } else {
      login();
    }
  }
);

Cypress.Commands.add("logout", () => {
  cy.get("[data-qa-selector='user_menu']").click();

  cy.get(".dropdown-menu.show").should("be.visible");

  cy.contains(".sign-out-link", "Sign out").click();
});

Cypress.Commands.add("gui_createProject", (project) => {
  cy.visit("/projects/new");

  cy.get("#project_name").type(project.name);
  cy.get("#project_description").type(project.description);
  cy.get(".qa-initialize-with-readme-checkbox").check();
  cy.contains("Create project").click();
});

Cypress.Commands.add("gui_createIssue", (issue) => {
  cy.visit(`/${Cypress.env("user_name")}/${issue.project.name}/issues/new`);

  cy.get("#issue_title").type(issue.title);
  cy.get("#issue_description").type(issue.description);
  cy.contains("input[type='submit']", "Submit issue").click();
});

Cypress.Commands.add("gui_createLabel", (issue) => {
  cy.visit(`/${Cypress.env("user_name")}/${issue.project.name}/-/labels/new`);

  cy.get(".qa-label-title").type(issue.label.title);
  cy.get(".qa-label-description").type(issue.label.description);
  cy.log(issue.label.color);
  cy.get(".qa-label-color").clear().type(issue.label.color);
  cy.contains("input", "Create label").click();
});

Cypress.Commands.add("gui_setLabelOnIssue", (label) => {
  cy.get(".qa-edit-link-labels").click();
  cy.contains(label.name).click();
  cy.get("body").click();
});

Cypress.Commands.add("gui_setMilestoneOnIssue", (milestone) => {
  cy.get("[data-track-property='milestone']").click();
  cy.contains("a", milestone.title).click();
});
