@forgot
Feature: Forgot your password?

  Background:
    Given que estou na pagina Forgot Your Password


  Scenario: Recuperação da senha com sucesso
    And informo o meu endereço de email cadastrado
    When clico no botao "Retrieve Password"
    Then a mensagem "A confirmation email has been sent to your address: ""email_cadastrado" surge na tela

