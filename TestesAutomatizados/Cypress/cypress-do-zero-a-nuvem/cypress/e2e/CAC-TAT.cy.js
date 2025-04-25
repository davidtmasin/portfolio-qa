describe('Central de Atendimento ao Cliente TAT', () => {
  // Variáveis de apoio
  const data = {
    title: 'Central de Atendimento ao Cliente TAT',
    firstName: 'David',
    lastName: 'Teixeira de Masin',
    invalidEmail: 'davidteixeira.info@gmail,com',
    validEmail: 'davidteixeira.info@gmail.com',
    phone: '85989647993',
    invalidPhone: 'oitocinconoveoitonovemeiaquatrosetenovenovetrês',
    shortMessage: 'Alguma coisa aqui para fins de teste',
    longMessage: Cypress._.repeat('Testando 123 qwerty abcdefghijklmnopqrstuvwxyz', 10),
    products: [
      'Blog', 'Cursos', 'Mentoria', 'YouTube'
    ]
  }
  const title = 'Central de Atendimento ao Cliente TAT'
  const firstName = 'David'
  const lastName = 'Teixeira de Masin'
  const invalidEmail = 'davidteixeira.info@gmail,com'
  const validEmail = 'davidteixeira.info@gmail.com'
  const phone = '85989647993'
  const invalidPhone = 'oitocinconoveoitonovemeiaquatrosetenovenovetrês'
  const shortMessage = 'Alguma coisa aqui para fins de teste'
  const longMessage = Cypress._.repeat('Testando 123 qwerty abcdefghijklmnopqrstuvwxyz', 10)
  const products = ['Blog', 'Cursos', 'Mentoria', 'YouTube']

  beforeEach(() => cy.visit('./src/index.html'))

  it('verifica o título da aplicação', () => {
    cy.title()
      .should('be.equal', title)
  })

  Cypress._.times(10, () => {
    it('preenche os campos obrigatório e envia o formulário', () => {
      cy.clock()
      cy.get('#firstName')
        .as('campo_nome')
        .should('be.visible')
      // cy.get('@campo_nome').type(Cypress.env('firstName'))
      cy.get('@campo_nome')
        .type(firstName)
        .should('have.value', firstName)

      cy.get('#lastName')
        .should('be.visible')
        .type(lastName)
        .should('have.value', lastName)

      cy.get('#email')
        .should('be.visible')
        .type(validEmail, { log: false })
        .should('have.value', validEmail)

      cy.get('#open-text-area')
        .should('be.visible')
        .type(longMessage, { delay: 0 })
        .should('have.value', longMessage)

      // cy.get('button[type="submit"]').as('enviar-form')
      cy.contains('button', 'Enviar')
        .should('be.visible')
        .click()

      cy.get('.success > strong')
        .as('msg-de-sucesso')
        .should('be.visible')
        .should('have.text', 'Mensagem enviada com sucesso.')

      cy.tick(3000)
      cy.get('@msg-de-sucesso').should('not.be.visible')
    });
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.clock()
    cy.get('#firstName').as('campo_nome')
    cy.get('@campo_nome').should('be.visible')
    cy.get('@campo_nome').type(firstName)
    cy.get('@campo_nome').should('have.value', firstName)

    cy.get('#lastName').as('campo_sobrenome')
    cy.get('@campo_sobrenome').should('be.visible')
    cy.get('@campo_sobrenome').type(lastName)
    cy.get('@campo_sobrenome').should('have.value', lastName)

    cy.get('#email').as('campo_email')
    cy.get('@campo_email').should('be.visible')
    cy.get('@campo_email').type(invalidEmail)
    cy.get('@campo_email').should('have.value', invalidEmail)
    cy.get('@campo_email').should('not.be.equal', validEmail)

    cy.get('#open-text-area').as('como-podemos-te-ajudar')
    cy.get('@como-podemos-te-ajudar').should('be.visible')
    cy.get('@como-podemos-te-ajudar').type(shortMessage, { delay: 2 })
    cy.get('@como-podemos-te-ajudar').should('have.value', shortMessage)

    // cy.get('button[type="submit"]').as('enviar-form')
    cy.contains('button', 'Enviar')
      .as('enviar-form')
      .should('be.visible')

    cy.get('@enviar-form').click()

    cy.get('.error > strong')
      .as('msg-de-erro').should('be.visible')
      .should('have.text', 'Valide os campos obrigatórios!')

    cy.tick(3000)
    cy.get('@msg-de-erro').should('not.be.visible')
  });

  it('campo telefone continua vazio quando preenchido com um valor não-numérico', () => {
    cy.get('#phone').as('campo_telefone')
    cy.get('@campo_telefone').should('be.visible')
    cy.get('@campo_telefone').type(invalidPhone)
    cy.get('@campo_telefone').should('not.have.value', invalidPhone)
    cy.get('@campo_telefone').should('have.value', '')
  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.clock()
    cy.get('#firstName').as('campo_nome')
    cy.get('@campo_nome').should('be.visible')
    cy.get('@campo_nome').type(firstName)
    cy.get('@campo_nome').should('have.value', firstName)

    cy.get('#lastName').as('campo_sobrenome')
    cy.get('@campo_sobrenome').should('be.visible')
    cy.get('@campo_sobrenome').type(lastName)
    cy.get('@campo_sobrenome').should('have.value', lastName)

    cy.get('#email').as('campo_email')
    cy.get('@campo_email').should('be.visible')
    cy.get('@campo_email').type(validEmail)
    cy.get('@campo_email').should('have.value', validEmail)

    cy.get("#phone-checkbox").as('marcador-telefone')
    cy.get('@marcador-telefone').should('be.visible')
    // cy.get('@marcador-telefone').click()
    cy.get('@marcador-telefone').check()

    cy.get('#open-text-area').as('como-podemos-te-ajudar')
    cy.get('@como-podemos-te-ajudar').should('be.visible')
    cy.get('@como-podemos-te-ajudar').type(longMessage, { delay: 0 })
    cy.get('@como-podemos-te-ajudar').should('have.value', longMessage)

    // cy.get('button[type="submit"]').as('enviar-form')
    cy.contains('button', 'Enviar')
      .as('enviar-form')
      .should('be.visible')

    cy.get('@enviar-form').click()

    cy.get('.error > strong')
      .as('msg-de-erro')
      .should('be.visible')
      .should('have.text', 'Valide os campos obrigatórios!')

    cy.tick(3000)
    cy.get('@msg-de-erro').should('not.be.visible')
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').as('campo_nome')
    cy.get('@campo_nome').should('be.visible')
    cy.get('@campo_nome').type(firstName)
    cy.get('@campo_nome').should('have.value', firstName)

    cy.get('#lastName').as('campo_sobrenome')
    cy.get('@campo_sobrenome').should('be.visible')
    cy.get('@campo_sobrenome').type(lastName)
    cy.get('@campo_sobrenome').should('have.value', lastName)

    cy.get('#email').as('campo_email')
    cy.get('@campo_email').should('be.visible')
    cy.get('@campo_email').type(validEmail)
    cy.get('@campo_email').should('have.value', validEmail)

    cy.get('#phone').as('campo_telefone')
    cy.get('@campo_telefone').should('be.visible')
    cy.get('@campo_telefone').type(phone)
    cy.get('@campo_telefone').should('have.value', phone)

    cy.get('@campo_nome').clear()
    cy.get('@campo_nome').should('have.value', '')

    cy.get('@campo_sobrenome').clear()
    cy.get('@campo_sobrenome').should('have.value', '')

    cy.get('@campo_email').clear()
    cy.get('@campo_email').should('have.value', '')

    cy.get('@campo_telefone').clear()
    cy.get('@campo_telefone').should('have.value', '')
  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    // cy.get('button[type="submit"]').as('enviar-form')
    cy.clock()
    cy.contains('button', 'Enviar').as('enviar-form')
    cy.get('@enviar-form').click()

    cy.get('.error > strong')
      .as('msg-de-erro')
      .should('be.visible')
      .should('have.text', 'Valide os campos obrigatórios!')

    cy.tick(3000)
    cy.get('@msg-de-erro').should('not.be.visible')
  });

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.clock()
    // cy.fillMandatoryFieldsAndSubmit(data)
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success > strong')
      .as('msg-de-sucesso')
      .should('be.visible')
      .should('have.text', 'Mensagem enviada com sucesso.')

    cy.tick(3000)
    cy.get('@msg-de-sucesso').should('not.be.visible')
  });

  it('selecione um produto (YouTube) por seu texto', () => {
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  });

  it('selecione um produto (Mentoria) por seu valor', () => {
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  });

  it('selecione um produto (Blog) por seu índice', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  });

  it('marca o tipo de atendimento "Feedback', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
      .should('have.value', 'feedback')
  });

  it('marca cada tipo de atendimento [1]', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
      .should('have.value', 'feedback')

    cy.get('input[type="radio"]')
      .check('elogio')
      .should('be.checked')
      .should('have.value', 'elogio')

    cy.get('input[type="radio"]')
      .first().check()
      .should('be.checked')
      .should('have.value', 'ajuda')
  });

  it('marca cada tipo de atendimento [2]', () => {
    cy.get('input[type="radio"]')
      .each((typeOfService) => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  });

  it('marca ambos checkboxes, depois desmarca o último [1]', () => {
    cy.get('input[type="checkbox"]')
      .as('checkboxes')
      .each((preferencialContact) => {
        cy.wrap(preferencialContact)
          .check()
          .should('be.checked')

        cy.get('@checkboxes')
          .last()
          .uncheck()
          .should('not.be.checked')
      })
  });

  it('marca ambos checkboxes, depois desmarca o último [2]', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  });

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => {
        console.log(input)
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json', { enconding: null }).as('exampleFile')
    cy.get('input[type="file"]')
      .selectFile('@exampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html')
  });

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()

    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')
  });

  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
    Cypress._.times(2, () => {
      cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .invoke('hide')
        .should('not.be.visible')
    })

    Cypress._.times(2, () => {
      cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .invoke('hide')
        .should('not.be.visible')
    })
  });

  it('preenche o campo da área de texto usando o comando invoke', () => {
    cy.get('#open-text-area')
    .invoke('val', 'Um texto qualquer')
    .should('have.value', 'Um texto qualquer')
  });

  it('encontrar o gatinho 🐈 escondido', () => {
    cy.get('#cat')
      .as('gatinho')

    cy.get('@gatinho')
      .invoke('show')
    
    cy.get('#title')
      .invoke('text', 'CAT TAT')

    cy.get('#subtitle')
      .invoke('text', 'I ❤️ cats!')
  });
})
