/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const options = { env: { snapshotOnly: true } };

describe("Cypress Intermediário V2 - Create Issue", options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    },
  };

  beforeEach(() => {
    cy.api_deleteProjects();
    cy.loginOptimized();
    cy.api_createProject(issue.project);
  });

  it("creates successfully a issue", () => {
    cy.gui_createIssue(issue);

    cy.url().should(
      "be.equal",
      `${Cypress.config("baseUrl")}/${Cypress.env("user_name")}/${
        issue.project.name
      }/issues/1`
    );
    cy.get(".issue-details")
      .should("contain", issue.title)
      .and("contain", issue.description)
      .and("be.visible");
  });
});
