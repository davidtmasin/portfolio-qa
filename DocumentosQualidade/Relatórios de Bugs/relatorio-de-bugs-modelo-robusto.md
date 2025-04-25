# Relatório de Bugs

**Software:** Sistema XYZ

**QA responsável:** David Teixeira de Masin

**Data:** 23.04.25

---

#### Bug 01: Erro ao finalizar compra (Pagamento não processado)

| **ID**  | **Descrição**                                                                                              |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| BUG-001 | Ao tentar finalizar a compra de um curso, o sistema exibe uma mensagem genérica e não conclui a transação. |

| **Severidade do Bug** | **Prioridade de Correção** |
| :-------------------: | :------------------------: |
|         Alta          |            Alta            |

| **Passo a passo para simular o bug**                            |
| --------------------------------------------------------------- |
| 1. Acessar o Ecommerce XYZ.                                     |
| 2. Adicionar um curso ao carrinho e prosseguir para pagamento.  |
| 3. Preencher os dados do cartão e clicar em "Finalizar Compra". |
| 4. O erro ocorre e o pagamento não é processado.                |

|                      **Comportamento Esperado**                      |        **Comportamento Obtido**         |
| :------------------------------------------------------------------: | :-------------------------------------: |
| O sistema deve concluir a compra e confirmar a transação ao usuário. | O pagamento falha sem explicação clara. |

| **Ambiente**             |
| ------------------------ |
| Ambiente de homologação. |
| Desktop com Win11.       |
| Chrome v.134.            |
| Sistema XYZ v.1.6.6.     |

| **Funcionalidade Afetada** |         **Caso de Teste Relacionado**          |
| :------------------------: | :--------------------------------------------: |
|          Checkout          | Validar pagamento por cartão de crédito válido |

|  **Evidência(s)**   |
| :-----------------: |
| <img src=".medias"> |

| **Status** | **DEV Responsável** | **Estimativa de Tempo** |
| :--------: | :-----------------: | :---------------------: |
|    Novo    |   Dwight Schrute    |           2h            |

---

#### Bug 02: Título curto e descritivo do bug

| **ID**  | **Descrição**                                                           |
| ------- | ----------------------------------------------------------------------- |
| BUG-002 | Descrição detalhada do bug, explicando o problema que foi identificado. |

|                                               **Severidade do Bug**                                               |                                          **Prioridade de Correção**                                          |
| :---------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| Quão grave este bug é para o sistema?; Baixa, média, alta ou crítica; Interferência na funcionalidade do sistema. | Qual rápido este bug precisa ser corrigido?; Baixa, média, alta ou urgente; Impacto no usuário e no negócio. |

| **Passo a passo para simular o bug**                                                 |
| ------------------------------------------------------------------------------------ |
| 1. Registre a sequência de passos até o momento que o bug é acionado e gera a falha. |

|                             **Comportamento Esperado**                              |                 **Comportamento Obtido**                 |
| :---------------------------------------------------------------------------------: | :------------------------------------------------------: |
| Descreva o comportamento correto que deveria ocorrer ao seguir os passos descritos. | Descreva o que realmente ocorre quando o bug é simulado. |

| **Ambiente**                                                                  |
| ----------------------------------------------------------------------------- |
| Ambiente onde o bug foi detectado [Produção, Homologação ou Desenvolvimento]. |
| Dispositivo.                                                                  |
| Sistema Operacional.                                                          |
| Browser.                                                                      |
| Versão da aplicação.                                                          |

|                        **Funcionalidade Afetada**                        |              **Caso de Teste Relacionado**              |
| :----------------------------------------------------------------------: | :-----------------------------------------------------: |
| Especifique a funcionalidade do sistema que está sendo afetada pelo bug. | Especifique em qual caso de teste esse bug se originou. |

|                               **Evidência(s)**                               |
| :--------------------------------------------------------------------------: |
| Anexar capturas de tela, vídeos ou logs de erro que ajudam a ilustrar o bug. |
|                             <img src=".medias">                              |

|           **Status**            |           **DEV Responsável**            |              **Estimativa de Tempo**               |
| :-----------------------------: | :--------------------------------------: | :------------------------------------------------: |
| Novo, Em andamento ou Corrigido | Informe o DEV responsável pela correção. | Especifique a estimativa de tempo para a correção. |

---
