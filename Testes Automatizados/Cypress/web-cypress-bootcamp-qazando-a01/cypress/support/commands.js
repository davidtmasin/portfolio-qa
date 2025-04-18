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

Cypress.Commands.add('logon', (data = {
    user_email: "edu@qazando.com",
    user_password: "123456"
}) => {
    cy.url().should('include', '/login')

    cy.get('#user').type(data.user_email)
    cy.get('#password').type(data.user_password, { log: false })
    cy.get('#btnLogin').click()

    cy.get('.swal2-popup').should('be.visible')
    cy.contains('.swal2-popup h2', 'Login realizado').should('be.visible')

    cy.contains('button', 'OK').click()

    cy.url().should('include', '/my-account')
})

Cypress.Commands.add('logout', () => {
    cy.contains('a', 'logout').click()

    cy.get('div[aria-labelledby="swal2-title"]').should('be.visible')
    cy.contains('h2', 'Logout Sucessfull').should('be.visible')
    cy.contains('div', 'Thank You').should('be.visible')

    cy.contains('button', 'OK').click()

    cy.url().should('include', '/login')
})

Cypress.Commands.add('makesSuccessfullyRegister', (data = {
    user_name: "Xablau Master",
    user_email: "teste@email.com",
    user_password: "explode-tudo-agora"
}) => {
    cy.url().should('include', '/register')

    cy.get('#user').type(data.user_name)
    cy.get('#email').type(data.user_email)
    cy.get('#password').type(data.user_password)
    cy.contains('button', 'Cadastrar').click()

    cy.get('.swal2-popup').should('be.visible')
    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')

    cy.contains('.swal2-html-container', 'Bem-vindo Xablau Master').should('be.visible')
})