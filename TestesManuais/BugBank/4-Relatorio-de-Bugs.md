# Relatório de Bugs

**Software:** Sistema XYZ

**QA responsável:** David Teixeira de Masin

**Data:** 23.04.25

---

#### Bug 01: A mensagem "É campo obrigatório" não está aparecendo ao deixar o campo "Nome" vazio.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-001 | Quando o campo Nome fica vazio e ignoramos o seu preenchimento, deveria aparecer a mensagem "É campo obrigatório" porém, isso não acontece. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Aberto  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Acessar o formulário de cadastro  |
| 2. Preencher todos os campos, exceto o Nome. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Deve aparecer a mensagem "É campo obrigatório" logo abaixo do campo Nome. | Não houve a apresentação da mensagem de alerta abaixo do campo Nome. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.135.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |              **Caso de Teste Relacionado**              |
| :------------------------: | :-----------------------------------------------------: |
|    Cadastro de usuário.    | C02-CT03: Cadastrar sem fornecer os dados obrigatórios. |

|  **Evidência(s)**   |
| :-----------------: |
| [Screenshot](/.medias/media-bug001.png) e [Video](/.medias/videos/bug001-C02-CT03.webm).|


---


#### Bug 02: A mensagem "Email não pode ser vazio" não é exibida ao enviar o formulário de cadastro com email vazio. 

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-002 | Na realização do cadastro de um novo usuário sem preencher o campo E-mail, a mensagem "Email não pode ser vazio" não é exibida ao efetuar o envio do formulário. Entretanto, só conseguimos ver a mensagem "É campo obrigatório", logo abaixo do campo E-mail. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Aberto  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Acessar o formulário de cadastro  |
| 2. Efetuar o preenchimento de todos os campos com exceção do Email. |
| 3. Realizar o envio do formulário com o clique no botão Cadastrar. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Deve exibir a mensagem "Email não pode ser vazio". | Não houve a apresentação da mensagem "Email não pode ser vazio", apenas a indicação do alerta "É campo obrigatório" logo abaixo do campo E-mail. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Cadastro de usuário. | CT02-C05: Cadastrar sem fornecer a informação de Email. |

|  **Evidência(s)**   |
| :-----------------: |
| [Screenshot](/.medias/media-bug002.png) e [Video](/.medias/videos/bug002-C02-CT05.webm) |


---


#### Bug 03: A mensagem "Senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com senha vazia.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-003 | Na realização do cadastro de um novo usuário sem preencher o campo Senha, a mensagem "Senha não pode ser vazio" não é exibida ao efetuar o envio do formulário. Entretanto, só conseguimos ver a mensagem "É campo obrigatório", logo abaixo do campo Senha. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Aberto  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Acessar o formulário de cadastro  |
| 2. Efetuar o preenchimento de todos os campos com exceção do Senha. |
| 3. Realizar o envio do formulário com o clique no botão Cadastrar. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Deve exibir a mensagem "Senha não pode ser vazio". | Não houve a apresentação da mensagem "Senha não pode ser vazio", apenas a indicação do alerta "É campo obrigatório" logo abaixo do campo Senha. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Cadastro de Usuário. | C02-CT06: Cadastrar sem fornecer a informação de Senha. |

|  **Evidência(s)**   |
| :-----------------: |
| [Screenshot](/.medias/media-bug003.png) e [Video](/.medias/videos/bug003-C02-CT06.webm) |


---


#### Bug 04: A mensagem "Confirmar senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com a confirmação de senha vazia.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-004 | Na realização do cadastro de um novo usuário sem preencher o campo Confirmar senha, a mensagem "Confirmar senha não pode ser vazio" não é exibida ao efetuar o envio do formulário. Entretanto, só conseguimos ver a mensagem "É campo obrigatório", logo abaixo do campo Confirmar senha. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Aberto  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Acessar o formulário de cadastro  |
| 2. Efetuar o preenchimento de todos os campos com exceção do Confirmar senha. |
| 3. Realizar o envio do formulário com o clique no botão Cadastrar. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Deve exibir a mensagem "Confirmar senha não pode ser vazio". | Não houve a apresentação da mensagem "Confirmar senha não pode ser vazio", apenas a indicação do alerta "É campo obrigatório" logo abaixo do campo Confirmar senha. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Cadastro de usuário. | C02-CT07: Cadastrar sem fornecer a informação de Confirmação de Senha. |

|  **Evidência(s)**   |
| :-----------------: |
| [Screenshot](/.medias/media-bug004.png) e [Video](/.medias/videos/bug004-C02-CT07.webm) |


---


#### Bug 05: Título do Bug.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-005 | A              |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Aberto  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1.                                   |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
|             .              |            .             |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
|             .              |               .               |

|  **Evidência(s)**   |
| :-----------------: |
| <img src=".medias"> |


---


#### Bug 06: Título do Bug.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-006 | A              |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Aberto  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1.                                   |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
|             .              |            .             |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
|             .              |               .               |

|  **Evidência(s)**   |
| :-----------------: |
| <img src=".medias"> |