/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const options = { env: { snapshotOnly: true } };

describe("Cypress Intermediário V2 - Set label on issue", options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5),
    },
  };

  const label = {
    name: `label-${faker.random.word()}`,
    color: "#ffaabb",
  };

  beforeEach(() => {
    cy.api_deleteProjects();
    cy.loginOptimized();
    cy.api_createIssue(issue).then((response) => {
      cy.api_createLabel(response.body.project_id, label);
      cy.visit(
        `${Cypress.env("user_name")}/${issue.project.name}/issues/${
          response.body.iid
        }`
      );
    });
    // cy.gui_createLabel(issue);
  });

  it("sets successfully a label on issue", () => {
    cy.gui_setLabelOnIssue(label);

    cy.get(".qa-labels-block").should("contain", label.name);
    cy.get(".qa-labels-block span").should(
      "have.attr",
      "style",
      `background-color: ${label.color}; color: #333333;`
    );
  });
});
