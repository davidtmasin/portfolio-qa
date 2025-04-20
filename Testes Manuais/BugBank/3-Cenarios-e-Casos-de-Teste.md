# Cenários e Casos de Teste

**Software:** BugBank

**QA responsável:** David Teixeira de Masin

**Data:** 19/04/2025

---

## Cenário 01: Login na plataforma.

**Descrição**: Validar a funcionalidade de login em diferente situações.

### Caso de Teste 01: Login com as credenciais de e-mail e senha válidas.
| ID |  Descrição |
| :--------- | :---------- |
| C01-CT01 | O login será realizada com um e-mail e uma senha válida. |

| **Pré-condições** |
| :--------- |
| As credenciais fornecidas (e-mail e senha) devem ser válidas. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "qa@teste.com.br" no campo e-mail |
| **E** preenchemos "qwe123" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** seremos redirecionados para a página inicial do cliente |

| **Critérios de aceitação** |
| :--------- |
| Deve haver o redirecionamento para a página inicial do cliente. |

### Caso de Teste 02: Login com senha incorreta.
| ID |  Descrição |
| :--------- | :---------- |
| C01-CT02 | O login será realizada com um e-mail válido e uma senha incorreta. |

| **Pré-condições** |
| :--------- |
| Fornecer senha incorreta. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "qa@teste.com.br" no campo e-mail |
| **E** preenchemos "123456" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"|

| **Critérios de aceitação** |
| :--------- |
| A mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!" deve ser apresentada. |

### Caso de Teste 03: Login com email não cadastrado.
| ID |  Descrição |
| :--------- | :---------- |
| C01-CT03 | O login será realizada com um e-mail não cadastrado e uma senha válida. |

| **Pré-condições** |
| :--------- |
| Fornecer um e-mail fora da base de cadastro. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "xablau@master.com.br" no campo e-mail |
| **E** preenchemos "qwe123" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!"|

| **Critérios de aceitação** |
| :--------- |
| A mensagem de erro "Usuário ou senha inválido. Tente novamente ou verifique suas informações!" deve ser apresentada. |

### Caso de Teste 04: Login com email em formato inválido.
| ID |  Descrição |
| :--------- | :---------- |
| C01-CT04 | O login será realizada com um e-mail inválido e uma senha válida. |

| **Pré-condições** |
| :--------- |
| Fornecer um e-mail com formato inválido. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **E** preenchemos "qa@" no campo e-mail |
| **E** preenchemos "qwe123" no campo senha |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem "Formato inválido" logo abaixo do campo e-mail |

| **Critérios de aceitação** |
| :--------- |
| Deverá aparecer a mensagem "Formato inválido" logo abaixo do campo e-mail. |

### Caso de Teste 05: Login sem fornecer e-mail e senha.
| ID |  Descrição |
| :--------- | :---------- |
| C01-CT04 | O login será realizada sem digitar um e-mail e senha. |

| **Pré-condições** |
| :--------- |
| Deixar os campos de e-mail e senha vazios. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de login da BugBank |
| **QUANDO** clicarmos no botão "Acessar" |
| **ENTÃO** veremos a mensagem "É campo obrigatório" logo abaixo dos campos e-mail e senha |

| **Critérios de aceitação** |
| :--------- |
| Deverá aparecer a mensagem "É campo obrigatório" logo abaixo dos campos e-mail e senha. |

---

## Cenário 02: Cadastro de usuário.

**Descrição**: Validar a funcionalidade de cadastro de usuário nos fluxos principais e alternativos.

### Caso de Teste 01: Cadastrar um novo usuário com sucesso (sem saldo).

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT01 | Todos os campos obrigatórios do formulário para o cadastro de um novo usuário deverão ser preenchidos.  |

| **Pré-condições** |
| :--------- |
| Fornecer os dados obrigatórios tais como, E-mail, Nome, Senha e Confirmação senha. |
| Não acionar a flag "Criar conta com saldo?". |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "xablau@teste.com" no campo E-mail |
| **E**  preenchemos "Xablau Master" no campo Nome |
| **E** preenchemos "qwerty123" no campo Senha |
| **E** preenchemos "qwerty123" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem que a conta foi criada com sucesso |

| **Critérios de aceitação** |
| :--------- |
| Com a nova conta criada, será possível efetuar o primeiro login. |
| Após o primeiro login, deve ser possível visualizar que o saldo é de R$0,00. |


### Caso de Teste 02: Cadastrar um novo usuário com sucesso (com saldo).

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT02 | Todos os campos obrigatórios do formulário para o cadastro de um novo usuário deverão ser preenchidos. |

| **Pré-condições** |
| :--------- |
| Fornecer os dados obrigatórios tais como, E-mail, Nome, Senha e Confirmação senha. |
| Acionar a flag "Criar conta com saldo?". |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "xablau@teste.com" no campo E-mail |
| **E**  preenchemos "Xablau Master" no campo Nome |
| **E** preenchemos "qwerty123" no campo Senha |
| **E** preenchemos "qwerty123" no campo Confirmação senha |
| **E** acionamos a flag "Criar conta com saldo?" |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem que a conta foi criada com sucesso |

| **Critérios de aceitação** |
| :--------- |
| Com a nova conta criada, será possível efetuar o primeiro login. |
| Após o primeiro login, deve ser possível visualizar o saldo de R$1000,00 disponível na conta. |

### Caso de Teste 03: Cadastrar sem fornecer os dados obrigatórios.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT03 | Forçar o cadastro de um novo usuário sem fornecer os dados obrigatórios (Nome, Email, Senha e Confirmação de Senha). |

| **Pré-condições** |
| :--------- |
| Não deve haver o preenchimento dos campos obrigatórios. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro |
| **QUANDO** clicarmos no botão "Cadastrar" |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| Deverá aparecer a mensagem "É campo obrigatório" logo abaixo de cada campo obrigatório. |

### Caso de Teste 04: Cadastrar sem fornecer a informação de Nome.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT04 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Nome". |

| **Pré-condições** |
| :--------- |
| Manter o campo Nome vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "teste@teste.com" no campo E-mail |
| **E** preenchemos "123456" no campo Senha |
| **E** preenchemos "123456" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Nome não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Nome não pode ser vazio" precisa estar visível. |

### Caso de Teste 05: Cadastrar sem fornecer a informação de Email.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT05 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Email". |

| **Pré-condições** |
| :--------- |
| Manter o campo Email vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "123456" no campo Senha |
| **E** preenchemos "123456" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Email não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Email não pode ser vazio" precisa estar visível.  |

### Caso de Teste 06: Cadastrar sem fornecer a informação de Senha.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT06 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Senha". |

| **Pré-condições** |
| :--------- |
| Manter o campo Senha vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "teste@teste.com" no campo Email |
| **E** preenchemos "123456" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Senha não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Senha não pode ser vazio" precisa estar visível. |

### Caso de Teste 07: Cadastrar sem fornecer a informação de Confirmação de Senha.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT07 | Forçar o cadastro de um novo usuário sem fornecer dados no campo "Confirmação senha". |

| **Pré-condições** |
| :--------- |
| Manter o campo Confirmação Senha vazio. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "teste@teste.com" no campo Email |
| **E** preenchemos "123456" no campo Senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "Confirmar senha não pode ser vazio." |

| **Critérios de aceitação** |
| :--------- |
| O cadastro não deverá acontecer e a mensagem de alerta "Cofirmar senha não pode ser vazio" precisa estar visível. |

### Caso de Teste 08: Cadastrar com divergência nos campos de Senha e Confirmação de Senha.

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT08 | Realizar o cadastro de um novo usuário onde as informação dos campos "Senha" e "Confirmação senha" são diferentes. |

| **Pré-condições** |
| :--------- |
| Os campos Senha e Confirnmação senha devem ser diferentes. |

| **Passos** |
| :--------- |
| **DADO** que estamos na página de cadastro  |
| **E** preenchemos "Teste QA" no campo Nome |
| **E** preenchemos "teste@teste.com" no campo Email |
| **E** preenchemos "123456" no campo Senha |
| **E** preenchemos "123456789" no campo Confirmação senha |
| **QUANDO**  clicarmos no botão "Cadastrar" |
| **ENTÃO** veremos uma mensagem de alerta "As senhas não são iguais." |

| **Critérios de aceitação** |
| :--------- |
|  O cadastro não deverá acontecer e a mensagem de alerta "As senhas não são iguais" precisa estar visível. |

---

## Cenário de Teste 03: Transferência de valores.

**Descrição**: Validar a funcionalidade de transferência de valores em fluxos principais e alternativos.

### Caso de Teste 01: Usar uma conta com saldo suficiente para transferir R$100 para uma conta válida.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT01 | Usando uma conta do BugBank com saldo suficiente para realizar uma transferência bancária de R$100 para uma conta válida. |

| **Pré-condições** |
| :--------- |
| Ter duas contas válidas no BugBank. |
| A conta que irá fazer a transferência de R$100 precisa ter saldo suficiente na conta. |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 02: Usar uma conta com saldo suficiente para transferir R$100 para uma conta inválida.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT02 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 03: Usar uma conta com saldo insuficiente para transferir R$1000 para uma conta válida.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT03 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 04: Usar uma conta com saldo insuficiente para transferir R$1000 para uma conta válida.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT04 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 05: Usar uma conta com saldo para transferência com valor zero.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT05 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 06: Usar uma conta com saldo para transferência com valor menor que zero.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT06 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 07: Usar uma conta com saldo para transferência sem preencher uma descrição.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT07 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 08: Usar uma conta com saldo para transferência sem preencher a conta de destino.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT08 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 09: Usar uma conta com saldo para transferência sem fornecer o valor da transferência.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT09 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 10: Usar uma conta com saldo para transferência sem preencher nenhuma informação.
| ID |  Descrição |
| :--------- | :---------- |
| C03-CT10 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

---

## Cenário de Teste 04: Extrato da conta.

**Descrição**: Validar a funcionalidade de extrato da conta mediante às transações realizadas.

### Caso de Teste 01: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT01 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 02: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT02 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 03: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT03 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 04: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT04 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 05: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT05 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 06: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT06 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 07: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT07 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 08: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT08 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 09: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT09 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

### Caso de Teste 10: .
| ID |  Descrição |
| :--------- | :---------- |
| C04-CT10 | . |

| **Pré-condições** |
| :--------- |
| . |

| **Passos** |
| :--------- |
| **DADO**  |
| **E**  |
| **E**  |
| **QUANDO**  |
| **ENTÃO**  |

| **Critérios de aceitação** |
| :--------- |
| . |

---
