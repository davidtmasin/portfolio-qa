# Cenários e Casos de Teste

**Software:** Sistema XYZ

**QA responsável:** David Teixeira de Masin

**Data:** 19/04/2025

##   Cenário 01: Cadastro de novo usuário.

**Descrição**: Validar o cadastro de um novo usuário com diferentes condições.

### Caso de Teste 01: Cadastro com dados válidos
| ID |  Descrição |
| :--------- | :---------- |
| C01-CT01 | Um novo usuário será cadastrado com sucesso ao fornecer dados válidos. |

| **Pré-condições** |
| :--------- |
| O usuário não deve ter uma conta cadastrada. |
| O usuário precisa fornecer nome, e-mail e senha para o cadastro. |

| **Passos** |
| :--------- |
| **DADO** que estou na página de cadastro de novo usuário |
| **E** preencho o campo nome |
| **E** preencho o campo e-mail |
| **E** preencho o campo senha |
| **QUANDO** clico no botão "Cadastrar Conta" |
| **ENTÃO** a mensagem "Usuário cadastrado com sucesso!" é apresentada |

| **Critérios de aceitação** |
| :--------- |
| Mensagem de sucesso ao finalizar o cadastro e envio do e-mail de confirmação da conta. |
