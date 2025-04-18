/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const options = { env: { snapshotOnly: true } };

describe("Cypress Intermediário V2 - Create Project", options, () => {
  beforeEach(() => {
    cy.api_deleteProjects();
    cy.loginOptimized();
  });
  it("creates successfully a project", () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    };

    cy.gui_createProject(project);

    cy.url().should(
      "be.equal",
      `${Cypress.config("baseUrl")}/${Cypress.env("user_name")}/${project.name}`
    );
    cy.contains("h1", `${project.name}`).should("be.visible");
    cy.contains("p", `${project.description}`).should("be.visible");
  });
});
