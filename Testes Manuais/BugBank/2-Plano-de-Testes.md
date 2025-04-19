# 🧪 Plano de Testes

**Software:** BugBank

**QA responsável:** David Teixeira de Masin

**Data:** 18/04/2025

## 1. Introdução

Este plano de testes descreve as atividades de verificação e validação para o sistema BugBank, uma plataforma web bancária. Esta aplicação permite que o usuário seja capaz de realizar um novo cadastro na plataforma, login, realizar transferência de valores e visualizar o extrato da sua conta.

## 2. Objetivo dos Testes

A verificação e validação das funcionalidades disponíveis será realizada a fim de checar se elas estão funcionando de acordo com os requisitos definidos.

## 3. Escopo dos Testes

Os testes serão realizados nas funcionalidades de Login, Cadastro, Transferência e Extrato, onde conduziremos os fluxos principais e alternativos com o intuito de ratificar se todas estas funcionalidades obedecem aos requisitos definidos.

Neste momento, não testaremos as funcionalidades de Pagamento e Saque, por estarem em fase de desenvolvimento.

## 4. Abordagem dos Testes

Para este projeto, todos os testes serão 100% manuais, do tipo funcional, e adotaremos a abordagem baseada em riscos, priorizando funcionalidades críticas como, login, transferência e extrato.

Além disso, sempre que for possível, realizaremos testes exploratórios para melhor conhecimento das funcionalidades disponíveis e descoberta de bugs ao acaso.


## 5. Critérios dos Testes

### 5.1. Critérios de Entrada

- O sistema BugBank deve está online.
- As funcionalidades devem estar disponíveis para teste.

### 5.2. Critérios de Saída

- Todos os casos de teste criados devem ser executados.
- Todos os defeitos críticos identificados devem ser resolvidos.

### 5.3. Critérios de Aceitação

- Todas as funcionalidades devem se comportar conforme o esperado.
- As funcionalidades de login, cadastro, transferência e extrato devem ocorrem em tempo aceitável.

## 6. Entregáveis

- Plano de Testes
- Cenários e Casos de Teste
- Relatórios de Bugs
- Resultados dos Testes

## 7. Ambiente de Testes

Recursos e configurações:

- Desktop, Windows 11 e Chrome versão 135.0.7049.96
- Jira para gestão das atividades
- [Jam](https://jam.dev/docs) para relatórios de bugs
- URL da aplicação: https://bugbank.netlify.app/

## 8. Riscos

| Risco | Mitigação |
|-------|-----------|
| Defeitos críticos descobertos tardiamente | Priorizar testes em funcionalidades críticas |
| Falha na comunicação entre equipes | Realizar reuniões diárias e usar ferramentas de gestão como Jira ou Asana |

## 9. Cronograma

### Estimativa

- **Fase 1: [Cenários e Casos de Teste](https://github.com/davidtmasin/portfolio-qa/blob/main/Testes%20Manuais/BugBank/3-Cenarios-e-Casos-de-Teste.md) (3 dias):**
  - Dias 1-3: Desenvolvimento e revisão dos casos de teste (Login, Cadastro, Transferência e Extrato)
- **Fase 2: Execução dos Testes e Reporte de Bugs (5 dias):**
  - Dias 4-8: Execução dos casos de teste e reporte dos bugs
- **Fase 3: Revisão e Documentação Final (3 dias):**
  - Dia 9-11: Revisão dos resultados e cobertura dos testes
  - Dia 10-11: Elaboração dos Resultados e documentação final

### Tabela

| Fase                      | Início       | Fim         |
|---------------------------|--------------|-------------|
| [Cenários e Casos de Teste](https://github.com/davidtmasin/portfolio-qa/blob/main/Testes%20Manuais/BugBank/3-Cenarios-e-Casos-de-Teste.md) | 19/04/2025   | 21/04/2025  |
| Execução dos testes       | 22/04/2025   | 27/04/2025  |
| Reporte de bugs           | 22/04/2025   | 27/04/2025  |
| Revisão                   | 28/04/2025   | 30/04/2025  |
| Resultados dos testes     | 29/04/2025   | 30/04/2025  |


