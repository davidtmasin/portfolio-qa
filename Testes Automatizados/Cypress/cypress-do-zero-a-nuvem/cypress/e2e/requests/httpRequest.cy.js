describe('Trabalhando com requisições HTTP', () => {
    it('faz uma requisição HTTP [1]', () => {
        cy.request({
            method: 'GET',
            url: 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html'
        }).as('getRequest')
          .its('status')
          .should('be.equal', 200)
        cy.get('@getRequest')
          .its('statusText')
          .should('be.equal', 'OK')
        cy.get('@getRequest')
          .its('body')
          .should('include', 'CAC TAT')
    });

    it('faz uma requisição HTTP [2]', () => {
        cy.request({
            method: 'GET',
            url: 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html'
        })
          .then(response => {
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
            expect(response.body).to.include('CAC TAT')
        })
    });
});