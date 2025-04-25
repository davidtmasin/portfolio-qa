@login
Feature: Login

  Background:
    Given que estou na pagina de login do site My Shop

  @login_successfully
  Scenario: Login efetuado com sucesso
    And digito um endereço de email
    And digito uma senha
    When clico no botao Sign In
    Then sou redirecionado para a pagina da minha conta pessoal no site My Shop

  @authentication_fail
  Scenario: Login deve falhar ao fornecer senha incorreta
    And digito um endereço de email
    And digito uma senha incorreta
    When clico no botao Sign In
    Then a mensagem "Authentication failed." é exibida na página

  @authentication_fail
  Scenario: Login deve falhar ao fornecer email fora da base de dados
    And digito um email fora da base de dados
    And digito uma senha
    When clico no botao Sign In
    Then a mensagem "Authentication failed." é exibida na página

  @invalid_email
  Scenario: Login deve falhar ao fornecer email com formato inválido
    And digito um email inválido
    And digito uma senha
    When clico no botao Sign In
    Then a mensagem "Invalid email address." é exibida na página

  @password_required
  Scenario: Login deve falhar quando não digitar a senha do usuário
    And digito um endereço de email
    When clico no botao Sign In
    Then a mensagem "Password is required." é exibida na página

  @email_required
  Scenario: Login deve falhar quando não digitar o email do usuário
    And digito uma senha
    When clico no botao Sign In
    Then a mensagem "An email address required." é exibida na página

  @email_required
  Scenario: Login deve falhar quando não digitar email e senha
    When clico no botao Sign In
    Then a mensagem "An email address required." é exibida na página

  @logout_successfully
  Scenario: Logout realizado com sucesso
    And realizo o login com sucesso
    When clico no botao de logout
    Then retorno para a pagina de login