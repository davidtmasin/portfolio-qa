Cypress._.times(3, () => {
  it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html')

    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
    
    cy.get('#title')
      .should('be.visible')
      .and('have.text', 'CAC TAT - Política de Privacidade')
    
    cy.get('#white-background.privacy')
      .should('be.visible')
    
    cy.contains('p', 'Talking About Testing')
      .should('be.visible')
  });
})