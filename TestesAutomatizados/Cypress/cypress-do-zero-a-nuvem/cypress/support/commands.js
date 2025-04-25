// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Xablau',
    lastName: 'Master',
    validEmail: 'xablaumaster@teste.com',
    shortMessage: 'Teste QA'
}) => {
    cy.get('#firstName')
      .should('be.visible')
      .type(data.firstName)
      .should('have.value', data.firstName)

    cy.get('#lastName')
      .should('be.visible')
      .type(data.lastName)
      .should('have.value', data.lastName)

    cy.get('#email')
      .should('be.visible')
      .type(data.validEmail)
      .should('have.value', data.validEmail)

    cy.get('#open-text-area')
      .should('be.visible')
      .type(data.shortMessage, {delay: 0})
      .should('have.value', data.shortMessage)

    cy.contains('button', 'Enviar')
      .as('enviar-form')
      .should('be.visible')
    cy.get('@enviar-form').click()
})