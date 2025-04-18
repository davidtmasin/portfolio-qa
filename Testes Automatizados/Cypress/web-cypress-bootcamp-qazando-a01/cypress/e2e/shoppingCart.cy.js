/// <reference types="cypress" />

describe('Carrinho de Compras', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('adiciona um novo produto ao carrinho e verifica a quantidade de produtos', () => {

    cy.get('img[src="/static/media/3.dfabc3a4.png"]').first().click()

    cy.url().should('include', '/product-details-two/23')

    cy.get('.header-action-link > li > .offcanvas-toggle > span')
      .last()
      .as('qtdProdutos')
      .should('have.text', 3)

    cy.contains('a', 'Add To Cart').click()

    cy.get('.swal2-popup').should('be.visible')
    cy.contains('h2', 'Success!').should('be.visible')

    cy.get('@qtdProdutos')
      .should('have.text', 4)

  })

  it('apresenta mensagem de falha ao adicionar novamente o mesmo produto ao carrinho', () => {
    cy.get('img[src="/static/media/3.dfabc3a4.png"]').first().click()

    cy.url().should('include', '/product-details-two/23')

    cy.get('.header-action-link > li > .offcanvas-toggle > span')
      .last()
      .as('qtdProdutos')
      .should('have.text', 3)

    cy.contains('a', 'Add To Cart').click()

    cy.get('.swal2-popup').as('popup').should('be.visible')
    cy.contains('h2', 'Success!').should('be.visible')

    cy.get('@qtdProdutos')
      .should('have.text', 4)

    cy.contains('a', 'Add To Cart').click()

    cy.get('@popup').should('be.visible')
    cy.contains('h2', 'Failed!').should('be.visible')
    cy.contains('div', 'This product is already added in your Cart').should('be.visible')

    cy.get('@qtdProdutos')
      .should('have.text', 4)
  })

  it('remove todos os produtos do carrinho de compras', () => {
    cy.get('a[class="offcanvas-toggle"] > i[class="fa fa-shopping-bag"]')
      .last()
      .as('qtdProdutos')

    cy.get('@qtdProdutos').click()

    cy.contains('.offcanvas-title', 'Shopping Cart').should('be.visible')
    cy.get('.offcanvas-cart > li').should('have.length', 3)
    cy.contains('.offcanvas-cart-total-price-value', '$107.00').should('be.visible')

    Cypress._.times(3, index => {
      cy.get(`.offcanvas-cart > li:nth-child(${index + 1})`).should('be.visible')
    })

    Cypress._.times(3, () => {
      cy.get(`.offcanvas-cart > li > div > a > i`).first().click()
    })

    cy.contains('.offcanvas-cart-total-price-value', '$0.00').should('be.visible')
    cy.get('.offcanvas-cart > li').should('have.length', 0)
    cy.get('.offcanvas-cart > li').should('not.exist')
  })

  it('verifica se o valor de "Subtotal" atualiza ao adicionar um novo produto', () => {
    cy.get('a[class="offcanvas-toggle"] > i[class="fa fa-shopping-bag"]')
      .last()
      .as('qtdProdutos')

    cy.get('@qtdProdutos').click()

    cy.contains('.offcanvas-cart-total-price-value', '$107.00').should('be.visible')

    cy.get('#offcanvas-add-cart .offcanvas-close').click()
    cy.get('img[src="/static/media/3.dfabc3a4.png"]').first().click()

    cy.url().should('include', '/product-details-two/23')

    cy.contains('a', 'Add To Cart').click()

    cy.get('@qtdProdutos').click()

    cy.contains('.offcanvas-cart-total-price-value', '$451.00').should('be.visible')
  })

  it('verifica se o valor de "Subtotal" atualiza ao remover um produto', () => {
    cy.get('a[class="offcanvas-toggle"] > i[class="fa fa-shopping-bag"]')
      .last()
      .as('qtdProdutos')

    cy.get('@qtdProdutos').click()

    cy.contains('.offcanvas-cart-total-price-value', '$107.00').should('be.visible')

    cy.get(`.offcanvas-cart > li > div > a > i`).first().click()

    cy.get('.offcanvas-cart-total-price-value').should('have.text', '$55.00')
  })

  it('altera a quantidade de um produto do carrinho e verifica seu valor final', () => {
    const qtdRandom = (Math.floor(Math.random() * 100) + 2)
    const priceTotal = qtdRandom * 52
    cy.get('a[class="offcanvas-toggle"] > i[class="fa fa-shopping-bag"]')
      .last()
      .as('qtdProdutos')

    cy.get('@qtdProdutos').click()
    cy.contains('a', 'View Cart').click()

    cy.url().should('include', '/cart')

    cy.get('tr:nth-child(1) > .product_total').last().as('productPriceTotal01')

    cy.get('@productPriceTotal01').should('have.text', '$52.00')

    cy.get('tr:nth-child(1) > .product_quantity > input').last().as('productQuantity01')
    cy.get('@productQuantity01').clear().type(qtdRandom)
    cy.get('@productPriceTotal01').should('contain', `${priceTotal}`)
  })

  it('limpa o carrinho e retorna à página de compras', () => {
    cy.get('a[class="offcanvas-toggle"] > i[class="fa fa-shopping-bag"]')
      .last()
      .click()
    cy.contains('a', 'View Cart').click()

    cy.url().should('include', '/cart')

    cy.get('table').should('be.visible')
    
    cy.contains('button', 'Clear cart').click()

    cy.get('table').should('not.exist')

    cy.get('.empaty_cart_area').should('be.visible')
    cy.contains('h2', 'YOUR CART IS EMPTY').should('be.visible')
    cy.contains('h3', 'Sorry Mate... No Item Found Inside Your Cart!').should('be.visible')

    cy.contains('a', 'Continue Shopping')
      .click()
    
    cy.url().should('include', '/shop')
  })
})