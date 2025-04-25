/// <reference types="cypress" />

describe('Cadastro de conta', () => {
  beforeEach(() => {
    cy.visit('/register')
  })
  
  it('cadastra nova conta com sucesso', () => {
    cy.makesSuccessfullyRegister()
  })

  it('não preenche os campos obrigatórios no cadastro', () => {
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })

  it('preenche apenas o campo "Nome" no cadastro', () => {
    cy.get("#user")
      .type('David')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  })

  it('preenche apenas o campo "E-mail" no cadastro', () => {
    cy.get("#email")
      .type('teste@email.com')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })

  it('preenche apenas o campo "Senha" no cadastro', () => {
    cy.get("#password")
      .type('qwerty123')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })

  it('preenche apenas os campos "Nome" e "E-mail"  no cadastro', () => {
    cy.get("#user")
      .type('David')
    cy.get("#email")
      .type('teste@email.com')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  })

  it('preenche apenas os campos "Nome" e "Senha"  no cadastro', () => {
    cy.get("#user")
      .type('David')
    cy.get("#password")
      .type('qwerty123')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  })

  it('preenche apenas os campos "E-mail" e "Senha"  no cadastro', () => {
    cy.get("#email")
      .type('David')
    cy.get("#password")
      .type('qwerty123')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo nome deve ser prenchido')
  })

  it('fornece email inválido no cadastro', () => {
    cy.get("#user")
      .type('David')
    cy.get("#email")
      .type('email')
    cy.get("#password")
      .type('qwerty123')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
  })

  it('fornece senha com menos de 6 dígitos no cadastro', () => {
    cy.get("#user")
      .type('David')
    cy.get("#email")
      .type('teste@email.com')
    cy.get("#password")
      .type('123')
    cy.contains('button', 'Cadastrar')
      .click()

    cy.get('.errorLabel')
      .should('be.visible')
      .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
  })
})