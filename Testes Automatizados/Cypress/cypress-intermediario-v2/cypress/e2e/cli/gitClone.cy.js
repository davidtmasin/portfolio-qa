/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
describe("Cypress Intermediário V2 - git clone", () => {
  const project = {
    name: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
  };

  beforeEach(() => {
    cy.api_deleteProjects();
    cy.api_createProject(project);
  });

  it("runs successfully a 'git clone' command", () => {
    cy.cloneViaSSH(project);

    cy.readFile(`cypress/downloads/${project.name}/README.md`)
      .should("contain", `# ${project.name}`)
      .and("contain", project.description);
  });
});
