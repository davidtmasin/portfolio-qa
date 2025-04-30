# Resultados dos Testes

**Software:** BugBank

**QA responsável:** David Teixeira de Masin

**Período da Execução dos Testes:** 22/04/2025 a 27/04/2025

**Data**: 29/04/2025

---

## 1. Resumo

Durante o período de testes, **31 casos de testes** foram executados nas funcionalidades liberadas do BugBank. O objetivo foi validar os fluxos principais e alternativos da jornada do cliente (cadastro, login, transferência e extrato).

Ao longo da execução dos testes, identificamos **13 bugs**, onde, **03 são de severidade crítica**, **03 de severidade média** e **07 de severidade baixa**. Essas identificações de bugs foram direcionadoas à equipe de desenvolvimento, entretanto, não houve o retorno das correções dentro da sprint, logo, novas rodadas de testes não puderam ser executadas sobre as funcionalidades impactadas.

---

## 2. Visão Geral

| Indicador                                    | Quantidade |
| -------------------------------------------- | :--------: |
| Total de Casos de Teste Criados              |     31     |
| Total de Casos de Teste Executados           |     31     |
| Total de Casos de Teste Aprovados (inicial)  |     23     |
| Total de Casos de Teste Reprovados (inicial) |     8      |
| Total de Bugs Detectados na Sprint           |     13     |
| Total de Bugs Corrigidos na Sprint           |     0      |
| Total de Casos de Teste Reexecutados         |     0      |
| Total de Casos de Teste Aprovados (final)    |     23     |
| Cobertura Funcional                          |    100%    |

---

## 3. Funcionalidades Avaliadas

| Módulo                   | Status    | Observações                                                                                                                                                                                                                           |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Login na plataforma      | Aprovado  | Foram criados **06 casos de testes** para esta funcionalidade e todas foram aprovadas.                                                                                                                                                |
| Cadastro de usuário      | Reprovado | Foram criados **09 casos de testes** para esta funcionalidade, onde 05 foram aprovados e 04 reprovados. Desses reprovados, temos **01 bug de severidade crítica**, **01 bug de severidade média** e **03 bugs de severidade baixa**.  |
| Transferência de valores | Reprovado | Foram criados **10 casos de testes** para esta funcionalidade, onde 06 foram aprovados e 04 reprovados. Desses reprovados, temos **01 bug de severidade crítica**, **02 bugs de severidade média** e **03 bugs de severidade baixa**. |
| Extrato da conta         | Aprovado  | Foram criados **06 casos de testes** para esta funcionalidade e todos foram aprovados.                                                                                                                                                |

---

## 4. Bugs Identificados

|   ID    | Descrição                                                                                                                          | Severidade | Status | Retestado e Aprovado? |
| :-----: | ---------------------------------------------------------------------------------------------------------------------------------- | :--------: | :----: | :-------------------: |
| BUG-001 | A mensagem "É campo obrigatório" não está aparecendo ao deixar o campo "Nome" vazio.                                               |   Baixa    | Aberto |          Não          |
| BUG-002 | A mensagem "Email não pode ser vazio" não é exibida ao enviar o formulário de cadastro com email vazio.                            |   Baixa    | Aberto |          Não          |
| BUG-003 | A mensagem "Senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com senha vazia.                            |   Baixa    | Aberto |          Não          |
| BUG-004 | A mensagem "Confirmar senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com a confirmação de senha vazia. |   Baixa    | Aberto |          Não          |
| BUG-005 | Não há nenhuma crítica pelo sistema ao cadastrar uma nova conta com as mesmas informações.                                         |  Crítica   | Aberto |          Não          |
| BUG-006 | Os campos do formulário de cadastro não são limpos após o envio.                                                                   |   Média    | Aberto |          Não          |
| BUG-007 | Login de um cadastro duplicado só é válido para última conta criada.                                                               |  Crítica   | Aberto |          Não          |
| BUG-008 | Redirecionamento para a página de Extrato não ocorre logo após realizar uma transferência.                                         |   Baixa    | Aberto |          Não          |
| BUG-009 | Após a transferência, os campos preenchidos não são limpos.                                                                        |   Baixa    | Aberto |          Não          |
| BUG-010 | Não houve crítica na ausência do preenchimento do campo Descrição no formulário de transferência.                                  |   Média    | Aberto |          Não          |
| BUG-011 | A transferência está ocorrendo quando não fornecemos uma conta de destino.                                                         |  Crítica   | Aberto |          Não          |
| BUG-012 | A mensagem de alerta quando o campo Valor está vazio não é amistosa.                                                               |   Baixa    | Aberto |          Não          |
| BUG-013 | Apenas o campo Valor da transferência apresenta a obrigatoriedade de preenchimento quando os demais campos estão vazios.           |   Média    | Aberto |          Não          |

---

## 5. Conclusão

O sistema BugBank está com os testes parcialmente aprovados e requer atenção às funcionalidades de Cadastro de usuário e Transferência de valores pois, elas apresentaram todos bugs que foram identificados no decorrer da execução dos testes.

A sugestão para garantir uma experiência satisfatória ao usuário e minimizar o impacto nos negócios é que haja uma força-tarefa para agilizar a correção dos bugs críticos e médios, para que haja uma nova execução dos testes que confirmem a resolução dos bugs. Só assim, será possível enviar uma versão para produção.

Vale lembrar que após tratar todos os bugs críticos e médios, deve haver o direcionamento para tratar daqueles com severidade baixa, apesar deles não causarem um grande impacto ao sistema, não podem ser ignorados pois, o objetivo final é garantir a maior qualidade possível do sistema para o usuário final.

---

## 6. Anexos

- **Jira**

  - [Quadro de Atividades](/.medias/docs/Jira%20-%20Quadro%20de%20Atividades.md)

- **Qase**

  - [Cenário e Casos de Teste](/.medias/docs/QASE%20-%20Cenários%20e%20Casos%20de%20Teste.pdf)
  - [Execução dos Testes Manuais](/.medias/docs/QASE%20-%20Execução%20dos%20Testes%20Manuais.pdf)

- **Evidências de Execução dos Casos de Testes**:

  - C01-CT01: Login com as credenciais de e-mail e senha válidas

    - [Video](/.medias/videos/C01-CT01)

  - C01-CT02: Login com senha incorreta

    - [Video](/.medias/videos/C01-CT02)

  - C01-CT03: Login com email não cadastrado

    - [Video](/.medias/videos/C01-CT03)

  - C01-CT04: Login com email em formato inválido

    - [Video](/.medias/videos/C01-CT04)

  - C01-CT05: Login sem fornecer e-mail e senha

    - [Video](/.medias/videos/C01-CT05)

  - C01-CT06: Login com as credenciais de e-mail e senha válidas

    - [Video](/.medias/videos/C01-CT06)

  - C02-CT01: Cadastrar um novo usuário com sucesso (sem saldo)

    - [Video](/.medias/videos/C02-CT01)

  - C02-CT02: Cadastrar um novo usuário com sucesso (com saldo)

    - [Video](/.medias/videos/C02-CT02)

  - C02-CT03: Cadastrar sem fornecer os dados obrigatórios

    - [Video](/.medias/videos/C02-CT03)

  - C02-CT04: Cadastrar sem fornecer a informação de Nome

    - [Video](/.medias/videos/C02-CT04)

  - C02-CT05: Cadastrar sem fornecer a informação de Email

    - [Video](/.medias/videos/C02-CT05)

  - C02-CT06: Cadastrar sem fornecer a informação de Senha

    - [Video](/.medias/videos/C02-CT06)

  - C02-CT07: Cadastrar sem fornecer a informação de Confirmação de Senha

    - [Video](/.medias/videos/C02-CT07)

  - C02-CT08: Cadastrar com divergência nos campos de Senha e Confirmação de Senha

    - [Video](/.medias/videos/C02-CT08)

  - C02-CT09: Cadastrar novamente o mesmo usuário

    - [Video](/.medias/videos/C02-CT09)

  - C03-CT01: Usar uma conta com saldo suficiente para transferir R$100 para uma conta válida

    - [Video](/.medias/videos/C03-CT01)

  - C03-CT02: Usar uma conta com saldo suficiente para transferir R$100 para uma conta inválida

    - [Video](/.medias/videos/C03-CT02)

  - C03-CT03: Transferir dinheiro para uma conta válida, estando com saldo insuficiente

    - [Video](/.medias/videos/C03-CT03)

  - C03-CT04: Transferir dinheiro para uma conta inválida, estando com saldo insuficiente

    - [Video](/.medias/videos/C03-CT04)

  - C03-CT05: Realizar uma transferência com valor zero

    - [Video](/.medias/videos/C03-CT05)

  - C03-CT06: Realizar uma transferência com valor menor que zero

    - [Video](/.medias/videos/C03-CT06)

  - C03-CT07: Realizar uma transferência sem preencher o campo obrigatório de descrição

    - [Video](/.medias/videos/C03-CT07)

  - C03-CT08: Realizar uma transferência sem preencher a conta de destino

    - [Video](/.medias/videos/C03-CT08)

  - C03-CT09: Realizar uma transferência sem fornecer o valor

    - [Video](/.medias/videos/C03-CT09)

  - C03-CT10: Realizar transferência sem fornecer todas as informações

    - [Video](/.medias/videos/C03-CT10)

  - C04-CT01: Checar registro de abertura de conta no extrato de uma conta criada com saldo

    - [Video](/.medias/videos/C04-CT01)

  - C04-CT02: Checar registro de abertura de conta no extrato de uma conta criada sem saldo

    - [Video](/.medias/videos/C04-CT02)

  - C04-CT03: Verificar no extrato se uma transação de entrada está vindo com a descrição

    - [Video](/.medias/videos/C04-CT03)

  - C04-CT04: Verificar no extrato se uma transação de saída está vindo com a descrição

    - [Video](/.medias/videos/C04-CT04)

  - C04-CT05: Verificar se uma transação de saída está visível no extrato com o valor em vermelho e um sinal negativo

    - [Video](/.medias/videos/C04-CT05)

  - C04-CT06: Verificar se uma transação de entrada no valor de R$100 está visível no extrato com o valor em verde
    - [Video](/.medias/videos/C04-CT06)

- **Evidências dos Bugs Identificados**:

  - BUG-001: A mensagem "É campo obrigatório" não está aparecendo ao deixar o campo "Nome" vazio.

    - [Screenshot](/.medias/media-bug001.png)
    - [Video](/.medias/videos/bug001-C02-CT03.webm)

  - BUG-002: A mensagem "Email não pode ser vazio" não é exibida ao enviar o formulário de cadastro com email vazio.

    - [Screenshot](/.medias/media-bug002.png)
    - [Video](/.medias/videos/bug002-C02-CT05.webm)

  - BUG-003: A mensagem "Senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com senha vazia.

    - [Screenshot](/.medias/media-bug003.png)
    - [Video](/.medias/videos/bug003-C02-CT06.webm)

  - BUG-004: A mensagem "Confirmar senha não pode ser vazio" não é exibida ao enviar o formulário de cadastro com a confirmação de senha vazia.

    - [Screenshot](/.medias/media-bug004.png)
    - [Video](/.medias/videos/bug004-C02-CT07.webm)

  - BUG-005: Não há nenhuma crítica pelo sistema ao cadastrar uma nova conta com as mesmas informações.

    - [Video](/.medias/videos/bug005-C02-CT09.webm)

  - BUG-006: Os campos do formulário de cadastro não são limpos após o envio.

    - [Video](/.medias/videos/bug006-C02-CT09.webm)

  - BUG-007: Login de um cadastro duplicado só é válido para última conta criada.

    - [Video](/.medias/videos/bug007-C02-CT09.webm)

  - BUG-008: Redirecionamento para a página de Extrato não ocorre logo após realizar uma transferência.

    - [Video](/.medias/videos/bug008-C03-CT01.webm)

  - BUG-009: Após a transferência, os campos preenchidos não são limpos.

    - [Video](/.medias/videos/bug009-C03-CT01.webm)

  - BUG-010: Não houve crítica na ausência do preenchimento do campo Descrição no formulário de transferência.

    - [Video](/.medias/videos/bug010-C03-CT07.webm)

  - BUG-011:A transferência está ocorrendo quando não fornecemos uma conta de destino.

    - [Screenshot](/.medias/media-bug011.png)
    - [Video](/.medias/videos/bug011-C03-CT08.webm)

  - BUG-012: A mensagem de alerta quando o campo Valor está vazio não é amistosa.

    - [Screenshot](/.medias/media-bug012.png)
    - [Video](/.medias/videos/bug012-C03-CT09.webm)

  - BUG-013: Apenas o campo Valor da transferência apresenta a obrigatoriedade de preenchimento quando os demais campos estão vazios.

    - [Screenshot](/.medias/media-bug013.png)
    - [Video](/.medias/videos/bug013-C03-CT10.webm)
