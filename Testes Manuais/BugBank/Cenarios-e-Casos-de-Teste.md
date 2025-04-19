# Cenários e Casos de Teste

**Software:** BugBank

**QA responsável:** David Teixeira de Masin

**Data:** 19/04/2025

---

## Cenário 01: Login do usuário

**Descrição**: Validar a funcionalidade de login em diferente situações.

### Caso de Teste 01: Login com as credenciais de e-mail e senha válidas
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

### Caso de Teste 02: Login com senha incorreta
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

### Caso de Teste 03: Login com email não cadastrado
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

### Caso de Teste 04: Login com email em formato inválido
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

### Caso de Teste 05: Login sem fornecer e-mail e senha
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

## Cenário 02: Cadastro de usuário

**Descrição**: Validar a funcionalidade de cadastro de usuário nos fluxos principais e alternativos.

### Caso de Teste 01: Cadastrar um novo usuário com sucesso

| ID |  Descrição |
| :--------- | :---------- |
| C02-CT01 | Deverá ser preenchido todos os campos obrigatórios do formulário para o cadastro de um novo usuário. |

| **Pré-condições** |
| :--------- |
| Fornecer os dados obrigatórios tais como, E-mail, Nome, Senha e Confirmação senha. |

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
