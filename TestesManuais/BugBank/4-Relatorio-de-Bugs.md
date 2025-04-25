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
| [Screenshot](/.medias/media-bug001.png) e [Vídeo](/.medias/videos/bug001-C02-CT03.webm).|


---


#### Bug 02: Título do Bug.

| **ID**  | **Descrição** |
| ------- | ------------- |
| BUG-002 |               |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |    Novo    |

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
| Chrome v.135.            |
| BugBank v1.1.2           |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
|             .              |               .               |

|  **Evidência(s)**   |
| :-----------------: |
| <img src=".medias"> |
