# Plano de Testes

**Software:** Sistema XYZ  

**QA responsável:** David Teixeira de Masin  

**Data:** 19/04/2025

---

## 1. Introdução

Este plano de testes descreve as atividades de verificação e validação para o sistema XYZ, uma plataforma web destinada ao/à _[descreva a finalidade do sistema]_.  
A aplicação permite _[descreva as funcionalidades do sistema]_.

---

## 2. Objetivo dos testes

Defina claramente o propósito do teste. O que você deseja alcançar? Por exemplo:

- Verificar se as funcionalidades do sistema estão funcionando como esperado.
- Validar a integração entre diferentes módulos.
- Avaliar o desempenho sob carga.

---

## 3. Escopo dos testes

Descreva o que será testado e o que não será testado. Isso ajuda a definir as fronteiras do plano de teste.

### O que será testado?

Funcionalidades principais, fluxos de usuário, casos de borda.

**Exemplos:**

- Autenticação de usuários (admin, bibliotecário e leitor).
- Cadastro e edição de livros.
- Funcionalidade de empréstimo e devolução.
- Notificações por e-mail sobre prazos.

### O que não será testado?

Aspectos fora do alcance do teste.

**Exemplos:**

- Integração com bibliotecas externas.
- Relatórios de livros emprestados e devolvidos.
- Controle de multas por atraso.
- Tradução automática do sistema.

---

## 4. Abordagem dos testes

A abordagem precisa considerar:

- **Modelo de Desenvolvimento:** Ágil, Cascata, Incremental/Iterativo.
- **Riscos do Projeto:** Funcionalidades críticas? Requisitos complexos ou mal definidos? Impactos financeiros ou legais?
- **Recursos Disponíveis:** Tamanho do time QA? Tempo? Ferramentas de automação?
- **Tipo e Complexidade do Sistema:** Web simples? Mobile? Crítico? Muitos usuários?

### Tipos de abordagem:

- **Analítica:** Baseada em requisitos, riscos ou modelos.
- **Modelada**
- **Heurística/Baseada em Experiência**

### Estratégia adotada:

Abordagem baseada em riscos, com prioridade alta para funcionalidades críticas como _[informar funcionalidades críticas]_.

**Tipos de testes:**

- Testes funcionais (caixa-preta)
- Testes de regressão automatizados (com Cypress)
- Testes exploratórios nas fases finais

---

## 5. Critérios dos testes

### 5.1. Critérios de entrada

Condições antes de iniciar os testes:

- Ambiente de teste configurado
- Código pronto para testar

### 5.2. Critérios de saída

Condições antes de encerrar os testes:

- Todos os casos de teste executados
- Defeitos críticos resolvidos

### 5.3. Critérios de aceitação

Condições para entrega ao cliente:

- Funcionalidade de login funciona conforme o esperado
- Sistema processa transações em tempo aceitável

---

## 6. Entregáveis

Artefatos a serem produzidos:

- Plano de Testes
- Cenários e Casos de Teste
- Relatórios de Bugs
- Resultado dos Testes

---

## 7. Ambiente dos testes

Recursos e configurações necessários:

- Dispositivos
- Sistemas operacionais
- Navegadores
- Frameworks ou ferramentas de testes
- Ferramentas de gestão de testes
- Dados de teste
- URL da aplicação de teste

---

## 8. Riscos

| Risco                               | Mitigação                                                                 |
|------------------------------------|---------------------------------------------------------------------------|
| Ambiente de testes instável        | Criar uma cópia estável do ambiente de produção e utilizar contêineres   |
| Defeitos críticos descobertos tardiamente | Priorizar testes em funcionalidades críticas e utilizar testes contínuos |
| Falha na comunicação entre equipes | Realizar reuniões diárias e utilizar ferramentas como Jira ou Asana      |
| Mudanças nos requisitos            | Adotar metodologia ágil e priorizar testes exploratórios                 |
| Baixa cobertura de testes          | Implementar testes automatizados e revisar regularmente os casos de teste|

---

## 9. Cronograma

### Fases do teste

- **Fase 1: Criação de Casos de Teste (3 dias)**  
  - Dias 1-3: Desenvolvimento e revisão dos casos de teste para funcionalidades (Carrinho, Checkout, Login/Logout)

- **Fase 2: Execução dos Testes e Reporte de Bugs (5 dias)**  
  - Dias 4-8: Execução dos testes  
  - Dias 4-8 (paralelo): Registro dos resultados e reporte de bugs

- **Fase 3: Revisão e Documentação Final (2 dias)**  
  - Dia 9: Revisão dos resultados dos testes, análise dos bugs e verificação da cobertura  
  - Dia 10: Elaboração do documento de Resultados dos Testes

### Tabela Resumo

| Fase                  | Início       | Fim         |
|-----------------------|--------------|-------------|
| Criação dos casos     | 30/03/2025   | 02/04/2025  |
| Execução dos testes   | 03/04/2025   | 06/04/2025  |
| Reporte de bugs       | 03/04/2025   | 06/04/2025  |
| Revisão               | 07/04/2025   | 07/04/2025  |
| Resultados dos testes | 08/04/2025   | 08/04/2025  |

---
