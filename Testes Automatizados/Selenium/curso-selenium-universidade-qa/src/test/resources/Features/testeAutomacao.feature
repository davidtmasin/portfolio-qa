Feature: Teste Automacao

  Contexto da funcionalidade, exemplo:
  Como cliente da plataforma
  Eu desejo que seja possível me autenticar
  Para que eu possa acessar minha conta

  @search
  Scenario: Validar se o botao pesquisar esta funcionando corretamente
    Given que eu acesso o site da google
    When eu digitar o texto universidade qa
    And clicar no botão pesquisar
    Then deve aparecer a tela com a lista de pesquisas encontradas no google
