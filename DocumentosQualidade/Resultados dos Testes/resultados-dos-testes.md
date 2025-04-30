# Resultados dos Testes

**Software:** Sistema XYZ  

**QA responsável:** David Teixeira de Masin  

**Período da Execução dos Testes:** 24/03/2025 a 04/04/2025

---

## 1. Resumo

Durante o período de testes, [XXX] casos de teste foram executados nas funcionalidades principais do Sistema XYZ. O objetivo foi validar os fluxos essenciais da jornada do cliente (navegação, compra, pagamento e frete).  
Ao longo da execução, [XXX] bugs foram identificados, sendo [XXX] críticos. As correções foram aplicadas ainda dentro da sprint, e novas rodadas de testes foram executadas sobre as funcionalidades impactadas.

---

## 2. Visão Geral

| Indicador                                    | Quantidade |
| -------------------------------------------- | ---------- |
| Total de Casos de Teste Criados              | 25         |
| Total de Casos de Teste Executados           | 25         |
| Total de Casos de Teste Aprovados (inicial)  | 21         |
| Total de Casos de Teste Reprovados (inicial) | 4          |
| Total de Bugs Detectados na Sprint           | 4          |
| Total de Bugs Corrigidos na Sprint           | 4          |
| Total de Casos de Teste Reexecutados         | 4          |
| Total de Casos de Teste Aprovados (final)    | 4          |
| Cobertura das Funcionalidades                | 100%       |

---

## 3. Funcionalidades Avaliadas

| Módulo              | Status   | Observações                                              |
| ------------------- | -------- | -------------------------------------------------------- |
| Autenticação        | Aprovado | Nenhum problema identificado.                            |
| Cadastro de Cliente | Aprovado | Fluxo validado com sucesso.                              |
| Busca de Produtos   | Aprovado | Foi incluído testes com filtros e categorias.            |
| Carrinho de Compras | Aprovado | Correção aplicada ao botão “Comprar agora” (BUG-001).    |
| Checkout            | Aprovado | Correção de falha na finalização validada (BUG-002).     |
| Cálculo de Frete    | Aprovado | Correção validada para CEPs de difícil acesso (BUG-003). |

---

## 4. Bugs Identificados

| ID      | Descrição                         | Severidade | Status    | Retestado e Aprovado? |
| ------- | --------------------------------- | ---------- | --------- | --------------------- |
| BUG-001 | Botão “Comprar agora” inativo     | Média      | Corrigido | Sim                   |
| BUG-002 | Erro na finalização do checkout   | Crítica    | Corrigido | Sim                   |
| BUG-003 | Cálculo incorreto de frete        | Alta       | Corrigido | Sim                   |
| BUG-004 | Layout quebrado em carrinho vazio | Baixa      | Corrigido | Sim                   |

---

## 5. Conclusão

### Exemplo 1 (com pendências):

O sistema foi parcialmente aprovado nos testes realizados.  
Para garantir uma experiência satisfatória ao usuário e minimizar o impacto nos negócios, recomenda-se a correção imediata dos bugs críticos e nova execução dos testes reprovados.

### Exemplo 2 (totalmente aprovado):

O sistema foi totalmente testado, com 100% de cobertura das funcionalidades principais.  
Os problemas encontrados durante a execução foram resolvidos dentro da mesma sprint, revalidados com sucesso e não foram identificados novos erros críticos, logo, está aprovado para produção.

---

## 6. Anexos

Exemplos do que pode ser incluído neste tópico:

- Capturas de tela antes/depois das correções.
- Vídeos de execução dos testes automatizados.
- Logs de execução e relatórios do TestRail.
- Histórico de bugs e suas resoluções no Jira.
