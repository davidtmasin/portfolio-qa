@checkout
Feature: Checkout

  Atividade Prática 01

  //Mesma ideia de um BeforeEach do Cypress
#  Background:
#    Given realize login no site sauce demo
#    And estou na tela inicial

  Scenario: Validar título do pedido na tela de checkout
    Given realize login no site sauce demo
    And estou na tela inicial
    When seleciono a blusa noir jacket
    And escolho o tamanho "L"
    And escolho a cor "Red"
    And clico no botão adicionar ao carrinho
    And clico no botão do menu checkout
    Then verifico se o título do pedido esta correto
