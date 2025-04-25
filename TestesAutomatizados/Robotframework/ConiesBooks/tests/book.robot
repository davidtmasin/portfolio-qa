*** Settings ***
Documentation    Documentação dos Casos de Testes

Resource    ../resource/book.resource

*** Test Cases ***
Adicionar um livro
    Adicionar um livro com sucesso
    Pesquisa um livro por id
    Alterar titulo de um livro existente
    Deletar um livro por id
