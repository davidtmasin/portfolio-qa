# Cenários e Casos de Teste

**Software:** Sistema XYZ

**QA responsável:** David Teixeira de Masin

**Data:** 19/04/2025

## Cenário 01: Cadastro de novo usuário.

**Descrição:** Validar o cadastro de um novo usuário com diferentes condições.

### Caso de Teste 01: Cadastro com dados válidos

| **ID**       | **Descrição** |
| :--------: | :----------:|
| C01-CT01 | Um novo usuário será cadastrado com sucesso ao fornecer dados válidos. |
| **Prioridade** | **Tipo de Teste** |
| Alta       | Funcional     |

| **Pré-condições** |
| :-------- |
| <ul> <li>O usuário precisa fornecer nome, e-mail e senha para o cadastro.</li> <li>O usuário não deve ter uma conta cadastrada.</li> <li>O usuário deve estar na página de cadastro.</li> </ul> |

| **Passos** |
| :-------- |
| <ol> <li>Acessar a página de cadastro.</li> <li>Preencher todos os campos corretamente.</li> <li>Clicar em "Criar Conta".</li> </ol>|

| **Resultado Esperado** | **Resultado Obtido** |
| :--------: | :--------: |
| Conta criada com sucesso e e-mail de confirmação enviado. | Confirmado que a conta foi criada com sucesso e um e-mail de confirmação chegou no e-mail utilizado no cadastro. |
|**Critérios de aceitação** | **Pós-condições** |
| Confirmado que a conta foi criada com sucesso e um e-mail de confirmação chegou no e-mail utilizado no cadastro. | Mensagem de sucesso ao finalizar o cadastro e envio do e-mail de confirmação da conta. |
| **Dados de teste** | **Status** |
| Nome: Xablau Master Email: xablau.master@email.com Senha: xablau12345 | Cadastro realizado com sucesso Sua conta foi criada com sucesso. |

| **Evidência(s)** |
| :--------: |
| *Incluir imagem* |


## Caso de Teste 02: Título do caso de teste

| **ID**       | **Descrição** |
| :--------: | :----------:|
| C01-CT02 | Breve explicação do que será testado. |
| **Prioridade** | **Tipo de Teste** |
| Defina a prioridade com base no impacto que o defeito causaria ao sistema e na sua frequência de uso (Alta - funcionalidade essencial para o sistema, Média funcionalidade relevante, mas não impede o uso geral do sistema ou Baixa funcionalidade de baixa relevância). | O tipo de teste a ser realizado como, funcional ou não-funcional. |

| **Pré-condições** |
| :--------: |
| <ul><li>Liste as condições necessárias antes da execução do teste.</li></ul> |

| **Passos** |
| :--------: |
| <ol> <li>Enumere as ações que devem ser realizadas.</li> </ol> |

| **Resultado Esperado** | **Resultado Obtido** |
| :--------: | :--------: |
| Informe o comportamento esperado do sistema. | Informe o comportamento real do sistema. |
| **Critérios de aceitação** | **Pós-condições** |
| Condições que definem o sucesso do teste. | Estado do sistema após o teste. |
| **Dados de teste** | **Status** |
| <ul> <li>Liste aqui as informações necessárias para realizar o teste.</li> </ul> | Sucesso ou Falha |

| **Evidência(s)** |
| :--------: |
| Insira aqui, a mídia que apresenta o resultado do caso de teste. |
