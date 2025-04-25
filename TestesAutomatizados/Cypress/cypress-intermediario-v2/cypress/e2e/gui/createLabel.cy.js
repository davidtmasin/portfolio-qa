/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const options = { env: { snapshotOnly: true } };

describe("Cypress Intermediário V2 - Create Label", options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    },
    label: {
      title: `label-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
      color: faker.color.rgb(),
    },
  };

  beforeEach(() => {
    cy.api_deleteProjects();
    cy.loginOptimized();
    cy.api_createIssue(issue);
  });

  it("creates successfully a label", () => {
    cy.gui_createLabel(issue);

    cy.url().should(
      "be.equal",
      `${Cypress.config("baseUrl")}/${Cypress.env("user_name")}/${
        issue.project.name
      }/-/labels`
    );
    cy.get(".labels-container")
      .should("contain", issue.label.title)
      .and("contain", issue.label.description)
      .and("be.visible");
  });
});
