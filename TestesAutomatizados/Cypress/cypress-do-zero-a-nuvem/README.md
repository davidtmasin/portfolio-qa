# 🌲 Cypress, do Zero à Nuvem ☁️

👋 Seja bem-vindo(a)!

Este repositório é destinado aos exercícios de teste realizadas ao longo do curso **Cypress, do Zero à Nuvem**, da Escola Talking About Testing, sob orientação do **professor [Walmyr](https://walmyr.dev)**.
 
## Pré-requisitos

É necessário ter git, Node.js, npm e cypress instalados para clonar e executar este projeto.

> Estou utilizando as versões `2.48.1`, `v22.14.0`, `10.9.2` e `13.12.0` do git, Node.js, npm e cypress, rerspectivamente. Sugiro que sejam utilizadas as mesmas versões ou as últimas versões LTS. 

## Instalação

Execute o comando `npm install` ou `npm i` para realizar a instalação das dev dependencies.

## Testes

Neste projeto, você poderá executar os testes em  Desktop viewport ou Mobile viewport.

Crie um arquivo `cypress.env.json` para criar e utilizar variáveis sensíveis nos testes. Este arquivo não pode ser versionado por questões de segurança.

Lembre-se de incluir este arquivo no `.gitignore`.

## Desktop

Execute o comando `npm test` ou `npm t` para executar o cypress em modo headless em Desktop viewport.

Ou, execute o comando `npm run cy:open` para abrir a Cypress App em Desktop viewport.

## Mobile

Execute o comando `npm test:mobile` para executar o cypress em modo headless em Mobile viewport.

Ou, execute o comando `npm run cy:open:mobile` para abrir a Cypress App em Mobile viewport.

## Apoie este projeto

Se você deseja apoiar este projeto, deixe uma ⭐.

___

Este é um curso da **Escola Talking About Testing**.

