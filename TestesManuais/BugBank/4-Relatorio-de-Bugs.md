# Relatório de Bugs

**Software:** Sistema XYZ

**QA responsável:** David Teixeira de Masin

**Data:** 23.04.25

---

#### Bug 01: A mensagem "É campo obrigatório" não está aparecendo ao deixar o campo "Nome" vazio.

| **ID**  | **Descrição**                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BUG-001 | Quando o campo Nome fica vazio e ignoramos o seu preenchimento, deveria aparecer a mensagem "É campo obrigatório" porém, isso não acontece. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug**         |
| -------------------------------------------- |
| 1. Acessar o formulário de cadastro          |
| 2. Preencher todos os campos, exceto o Nome. |

|                        **Comportamento Esperado**                         |                       **Comportamento Obtido**                       |
| :-----------------------------------------------------------------------: | :------------------------------------------------------------------: |
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

|                                     **Evidência(s)**                                     |
| :--------------------------------------------------------------------------------------: |
| [Screenshot](/.medias/media-bug001.png) e [Video](/.medias/videos/bug001-C02-CT03.webm). |

---

#### Bug 02: A mensagem "Email não pode ser vazio" não é exibida ao enviar o formulário de cadastro com email vazio.

| **ID**  | **Descrição**                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BUG-002 | Na realização do cadastro de um novo usuário sem preencher o campo E-mail, a mensagem "Email não pode ser vazio" não é exibida ao efetuar o envio do formulário. Entretanto, só conseguimos ver a mensagem "É campo obrigatório", logo abaixo do campo E-mail. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug**                                |
| ------------------------------------------------------------------- |
| 1. Acessar o formulário de cadastro                                 |
| 2. Efetuar o preenchimento de todos os campos com exceção do Email. |
| 3. Realizar o envio do formulário com o clique no botão Cadastrar.  |

|             **Comportamento Esperado**             |                                                             **Comportamento Obtido**                                                             |
| :------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
| Deve exibir a mensagem "Email não pode ser vazio". | Não houve a apresentação da mensagem "Email não pode ser vazio", apenas a indicação do alerta "É campo obrigatório" logo abaixo do campo E-mail. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |              **Caso de Teste Relacionado**              |
| :------------------------: | :-----------------------------------------------------: |
|    Cadastro de usuário.    | CT02-C05: Cadastrar sem fornecer a informação de Email. |

|                                    **Evidência(s)**                                     |
| :-------------------------------------------------------------------------------------: |
| [Screenshot](/.medias/media-bug002.png) e [Video](/.medias/videos/bug002-C02-CT05.webm) |

---

#### Bug 03: A mensagem "Senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com senha vazia.

| **ID**  | **Descrição**                                                                                                                                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BUG-003 | Na realização do cadastro de um novo usuário sem preencher o campo Senha, a mensagem "Senha não pode ser vazio" não é exibida ao efetuar o envio do formulário. Entretanto, só conseguimos ver a mensagem "É campo obrigatório", logo abaixo do campo Senha. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug**                                |
| ------------------------------------------------------------------- |
| 1. Acessar o formulário de cadastro                                 |
| 2. Efetuar o preenchimento de todos os campos com exceção do Senha. |
| 3. Realizar o envio do formulário com o clique no botão Cadastrar.  |

|             **Comportamento Esperado**             |                                                            **Comportamento Obtido**                                                             |
| :------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
| Deve exibir a mensagem "Senha não pode ser vazio". | Não houve a apresentação da mensagem "Senha não pode ser vazio", apenas a indicação do alerta "É campo obrigatório" logo abaixo do campo Senha. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |              **Caso de Teste Relacionado**              |
| :------------------------: | :-----------------------------------------------------: |
|    Cadastro de Usuário.    | C02-CT06: Cadastrar sem fornecer a informação de Senha. |

|                                    **Evidência(s)**                                     |
| :-------------------------------------------------------------------------------------: |
| [Screenshot](/.medias/media-bug003.png) e [Video](/.medias/videos/bug003-C02-CT06.webm) |

---

#### Bug 04: A mensagem "Confirmar senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com a confirmação de senha vazia.

| **ID**  | **Descrição**                                                                                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BUG-004 | Na realização do cadastro de um novo usuário sem preencher o campo Confirmar senha, a mensagem "Confirmar senha não pode ser vazio" não é exibida ao efetuar o envio do formulário. Entretanto, só conseguimos ver a mensagem "É campo obrigatório", logo abaixo do campo Confirmar senha. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug**                                          |
| ----------------------------------------------------------------------------- |
| 1. Acessar o formulário de cadastro                                           |
| 2. Efetuar o preenchimento de todos os campos com exceção do Confirmar senha. |
| 3. Realizar o envio do formulário com o clique no botão Cadastrar.            |

|                  **Comportamento Esperado**                  |                                                                      **Comportamento Obtido**                                                                       |
| :----------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Deve exibir a mensagem "Confirmar senha não pode ser vazio". | Não houve a apresentação da mensagem "Confirmar senha não pode ser vazio", apenas a indicação do alerta "É campo obrigatório" logo abaixo do campo Confirmar senha. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |                     **Caso de Teste Relacionado**                      |
| :------------------------: | :--------------------------------------------------------------------: |
|    Cadastro de usuário.    | C02-CT07: Cadastrar sem fornecer a informação de Confirmação de Senha. |

|                                    **Evidência(s)**                                     |
| :-------------------------------------------------------------------------------------: |
| [Screenshot](/.medias/media-bug004.png) e [Video](/.medias/videos/bug004-C02-CT07.webm) |

---

#### Bug 05: Não há nenhuma crítica pelo sistema ao cadastrar uma nova conta com as mesmas informações.

| **ID**  | **Descrição**                                                                                                                                               |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BUG-005 | Ao cadastrar duas contas com as mesmas informações, o sistema não apresenta nenhuma crítica, permite o cadastro e ainda gera a numeração e dígito da conta. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|        Crítica        |            Alta            |   Aberto   |

| **Passo a passo para simular o bug**                                                                            |
| --------------------------------------------------------------------------------------------------------------- |
| 1. Realize um cadastro do zero com os seguintes dados: "teste@email.com", "Teste QA", "qwerty123", "qwerty123". |
| 2. Faça um novo cadastro repetindo todas as informações do passo 1.                                             |

|      **Comportamento Esperado**       |                             **Comportamento Obtido**                             |
| :-----------------------------------: | :------------------------------------------------------------------------------: |
| Não deve permitir cadastro duplicado. | Permitiu o cadastro duplicado e ainda gerou número e dígito da conta diferentes. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |         **Caso de Teste Relacionado**          |
| :------------------------: | :--------------------------------------------: |
|    Cadastro de usuário.    | C02-CT09: Cadastrar novamente o mesmo usuário. |

|               **Evidência(s)**                |
| :-------------------------------------------: |
| [Video](/.medias/videos/bug005-C02-CT09.webm) |

---

#### Bug 06: Os campos do formulário de cadastro não são limpos após o envio.

| **ID**  | **Descrição**                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| BUG-006 | Após cadastrar um novo usuário e retornar para a página de cadastro, todas as informações preenchidas anteriormente, permanecem nos campos. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |            Alta            |   Aberto   |

| **Passo a passo para simular o bug**  |
| ------------------------------------- |
| Realizar um novo cadastro de usuário. |
| Voltar para à página de cadastro.     |

|                      **Comportamento Esperado**                       |                               **Comportamento Obtido**                               |
| :-------------------------------------------------------------------: | :----------------------------------------------------------------------------------: |
| Após o envio do formulário de cadastro, os campos devem ficar vazios. | Os campos do formulário não estão vazios, permanecem com os mesmos dados utilizados. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |         **Caso de Teste Relacionado**          |
| :------------------------: | :--------------------------------------------: |
|    Cadastro de usuário.    | C02-CT09: Cadastrar novamente o mesmo usuário. |

|               **Evidência(s)**                |
| :-------------------------------------------: |
| [Video](/.medias/videos/bug006-C02-CT09.webm) |

---

#### Bug 07: Login de um cadastro duplicado só é válido para última conta criada.

| **ID**  | **Descrição**                                                                       |
| ------- | ----------------------------------------------------------------------------------- |
| BUG-007 | Após a realização de cadastros duplicados, o login só funciona para a última conta. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|        Crítica        |            Alta            |   Aberto   |

| **Passo a passo para simular o bug**                        |
| ----------------------------------------------------------- |
| 1. Realizar pelo menos o cadastro de duas contas iguais.    |
| 2. Efetuar o login com as credencias das contas duplicadas. |

|                                 **Comportamento Esperado**                                 |                     **Comportamento Obtido**                      |
| :----------------------------------------------------------------------------------------: | :---------------------------------------------------------------: |
| Não deveria haver nem o cadastro de contas duplicadas para evitar a problemática do login. | O login funciona apenas para a última conta duplicada cadastrada. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** |         **Caso de Teste Relacionado**          |
| :------------------------: | :--------------------------------------------: |
|    Cadastro de usuário.    | C02-CT09: Cadastrar novamente o mesmo usuário. |

|               **Evidência(s)**                |
| :-------------------------------------------: |
| [Video](/.medias/videos/bug007-C02-CT09.webm) |

---

#### Bug 08: Redirecionamento para a página de Extrato não ocorre logo após realizar uma transferência.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-008 | No processo de transferência de valores, foi observado que após a finalização, não há o redirecionamento para a página de Extrato. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Realizar o fluxo de transferência de valores. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Deve ocorrer o redirecionamento para a página de Extrato, logo após a transferência com sucesso. | Permaneceu na página de Transferência. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Transferência de valores.  | C03-CT01: Usar uma conta com saldo suficiente para transferir R$100 para uma conta válida. |

|  **Evidência(s)**   |
| :-----------------: |
| [Video](/.medias/videos/bug008-C03-CT01.webm) |

---

#### Bug 09: Após a transferência, os campos preenchidos não são limpos.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-009 | Com uma transferência realizada com sucesso, além de não haver o redirecionamento da página, os campos não são limpos. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Efetuar uma transferência de qualquer valor, o importante é que no final, apresente uma mensagem de sucesso. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Os campos devem ser limpos. | Os dados preenchidos anteriormente se mantém. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Transferência de valores. | C03-CT01: Usar uma conta com saldo suficiente para transferir R$100 para uma conta válida. |

|  **Evidência(s)**   |
| :-----------------: |
| [Video](/.medias/videos/bug009-C03-CT01.webm) |

---

#### Bug 10: Não houve crítica na ausência do preenchimento do campo Descrição no formulário de transferência.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-010 | Ao ignorar o preenchimento do campo Descrição, o sistema sequer criticou, a transferência foi realizada e no extrato, a descrição veio representada pelo caractere hífen (-). |             |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Efetuar uma transferência de qualquer valor, ignorando o preenchimento da descrição. |
| 2. Verificar no extrato, a transferência realizada. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| A transferência não deve ocorrer e o sistema deverá criticar pela ausência de preenchimento no campo Descrição. | O sistema permitiu a transferência e no extrato, a descrição está com um hífen (-). |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Transferência de valores. | C03-CT07: Realizar uma transferência sem preencher o campo obrigatório de descrição. |

|  **Evidência(s)**   |
| :-----------------: |
| [Video](/.medias/videos/bug010-C03-CT07.webm) |

---

#### Bug 11: A transferência está ocorrendo quando não fornecemos uma conta de destino.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-011 | A transferência é realizada com sucesso, mesmo sem preencher as informações da conta de destino. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Crítica         |           Alta            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Efetuar uma transferência de uma valor qualquer sem efetuar o preenchimento do Número da conta e Dígito. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| A transferência não deve ocorrer e o sistema deve criticar pois, não houve o preenchimento dos campos Número da conta e Dígito. | A transferência foi realizada com sucesso e o saldo da conta foi subtraído no valor que foi indicado para a transferência. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Transferência de valores. | C03-CT08: Realizar uma transferência sem preencher a conta de destino. |

|  **Evidência(s)**   |
| :-----------------: |
| [Video](/.medias/videos/bug011-C03-CT08.webm) | 

---

#### Bug 12: A mensagem de alerta quando o campo Valor está vazio não é amistosa.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-012 | Ao efetuar uma transferência sem definir o valor, a mensagem "**transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `""`).**" é exibida e não é amistosa ao usuário final.|

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Realizar uma transferência em informar o valor. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| A apresentação de uma mensagem amistosa ao usuário final, por exemplo, "Não é possível fazer uma transferência sem informar um valor." | Foi exibida a "transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `""`).". |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Transferência de valores. | C03-CT09: Realizar uma transferência sem fornecer o valor. |

|  **Evidência(s)**   |
| :-----------------: |
| [Screenshot](/.medias/media-bug012.png) e [Video](/.medias/videos/bug012-C03-CT09.webm) |

---

#### Bug 13: Apenas o campo Valor da transferência apresenta a obrigatoriedade de preenchimento quando os demais campos estão vazios.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-013 | Na tentativa de efetuar uma transferência sem preencher nenhuma informação, apenas o campo Valor da transferência que tem o comportamento de campo obrigatório. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Efetuar uma transferência sem preencher nenhuma informação. |

| **Comportamento Esperado** | **Comportamento Obtido** |
| :------------------------: | :----------------------: |
| Criticar todos os campos obrigatórios tais como, Número da Conta, Dígito, Valor da transferência e Descrição. | Apenas o campo Valor da transferência que teve a crítica do sistema por estar vazio. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.136.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| Transferência de valores | C03-CT10: Realizar transferência sem fornecer todas as informações. |

|  **Evidência(s)**   |
| :-----------------: |
| [Screenshot](/.medias/media-bug013.png) e [Video](/.medias/videos/bug013-C03-CT10.webm) |

---
