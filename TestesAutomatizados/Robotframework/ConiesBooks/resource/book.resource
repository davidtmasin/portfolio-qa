*** Settings ***
Documentation    Documentação das Keywords

Library    RequestsLibrary
Library    JSONLibrary
Library    Collections

Resource   ../config/config.resource

*** Variables ***
${ID}    66
${TITLE}   Automação do Zero 
${DESCRIPTION}    Ensinando automação de forma prática
${PAGECOUNT}    345

*** Keywords ***
Adicionar um livro com sucesso
    ${BOOK_JSON}    Load Json From File    config/payload/book.json
    Set To Dictionary    ${BOOK_JSON}    id=${ID}
    Set To Dictionary    ${BOOK_JSON}    title=${TITLE}
    Set To Dictionary    ${BOOK_JSON}    description=${DESCRIPTION}
    Set To Dictionary    ${BOOK_JSON}    pageCount=${PAGECOUNT}    
    ${HEADERS}=    Create Dictionary    Content-type=application/json
    ${RESPONSE}=    POST    ${URL_BASE}api/v1/Books    json=${BOOK_JSON}    headers=${HEADERS}    expected_status=200

Pesquisa um livro por id
    ${HEADERS}=    Create Dictionary    Content-type=application/json
    ${RESPONSE}=    GET    ${URL_BASE}api/v1/Books/66    headers=${HEADERS}    expected_status=200

Alterar titulo de um livro existente
    ${BOOK_JSON}    Load Json From File    config/payload/book.json
    Set To Dictionary    ${BOOK_JSON}    title=Socorro Deus
    ${HEADERS}=    Create Dictionary    Content-type=application/json
    ${RESPONSE}=    PUT    ${URL_BASE}api/v1/Books/66    json=${BOOK_JSON}    headers=${HEADERS}    expected_status=200

Deletar um livro por id
    ${HEADERS}=    Create Dictionary    Content-type=application/json
    ${RESPONSE}=    DELETE    ${URL_BASE}api/v1/Books/66    headers=${HEADERS}    expected_status=200
