/// <reference types="cypress" />
describe('Login', () => {
  beforeEach(() => {
    // cy.viewport('macbook-16')
    cy.visit('/login')
  })
  
  it('utiliza credenciais válidas no ato do Login', () => {
    cy.logon()
  })

  it('utiliza e-mail inválido no ato do Login', () => {
    cy.get('#user')
      .type('edu#qazando.com')
    cy.get('#password')
      .type('123456', { log: false })
    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')
      .should('have.text', 'E-mail inválido.')
  })

  it('utiliza senha incorreta no ato do Login', () => {
    cy.get('#user')
      .type('edu@qazando.com')
    cy.get('#password')
      .type('123', { log: false })
    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')
      .should('have.text', 'Senha inválida.')
  })

  it('pula o preenchimendo do email e da senha no ato do Login', () => {
    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')
      .should('be.visible')
  })

  it('preenche apenas o e-mail no ato do Login', () => {
    cy.get('#user')
      .type('edu@qazando.com')
    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')
      .should('be.visible')
  })

  it('preenche apenas a senha no ato do Login', () => {
    cy.get('#password')
      .type('123456', { log: false })
    cy.get('#btnLogin')
      .click()

    cy.get('.invalid_input')
      .should('be.visible')
  })

  it('realiza o logout com sucesso', () => {
    cy.logon()
    cy.logout()
  })
})