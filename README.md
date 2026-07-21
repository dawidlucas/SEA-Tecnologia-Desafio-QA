# Desafio Técnico QA — Automação de Testes (Cypress)

Automação de testes end-to-end para o fluxo de **cadastro de funcionários** e a **tela principal de listagem**, desenvolvida como parte de um desafio técnico para vaga de QA.

## 🎯 Sobre o projeto

Durante a análise do sistema, foram mapeados **25 casos de teste**. Desses, **21 evidenciaram bugs** no sistema avaliado (comportamentos inconsistentes, dados divergentes na listagem, ausência de regras de negócio, entre outros). Os **5 casos considerados estáveis e passíveis de automação** foram implementados neste projeto, seguindo o padrão **Page Object Model (POM)**.

A decisão de não automatizar os casos com bug foi intencional: automatizar sobre um comportamento instável geraria testes "flaky" (instáveis), que falham por causa do bug e não por regressão real — o que reduz a confiabilidade da suíte de testes. Esses casos foram documentados separadamente como evidências de bug.


## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [Allure Report](https://allurereport.org/) — Framework de relatórios interativos e métricas de execução
- [Faker.js (pt-BR)](https://fakerjs.dev/) — geração de dados fictícios para os testes
- JavaScript (ES6+)

## 📁 Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── cadastroFuncionario.cy.js   # Testes do fluxo de cadastro de funcionário
│   └── home.cy.js                  # Testes da tela principal (listagem, filtros, navegação)
├── fixtures/
│   ├── cadastroValidoDados.json    # Massa de dados para cadastro válido
│   └── atestado.pdf                # Arquivo utilizado no upload de atestado
├── helpers/
│   └── fakerHelper.js              # Geração de dados dinâmicos (nome)
├── pages/
│   ├── home.page.js                # Page Object da tela principal
│   └── cadastroFuncionario.page.js # Page Object da tela de cadastro
└── support/
    ├── commands.js
    └── e2e.js
```
    

## 🏗️ Arquitetura e boas práticas aplicadas

- **Page Object Model (POM)**: toda interação com a interface está isolada nas classes de `pages/`, mantendo os arquivos de teste (`.cy.js`) focados apenas no fluxo do cenário.
- **Ações e validações separadas**: cada Page Object separa claramente métodos de **ação** (`clicar...`, `preencher...`, `selecionar...`) dos métodos de **validação** (`validar...`), facilitando manutenção e leitura.
- **Massa de dados desacoplada**: dados fixos ficam em `fixtures/`, e dados dinâmicos (que precisam ser únicos a cada execução) são gerados via `fakerHelper.js`.
- **Organização por tela/contexto**: os testes são agrupados por `describe` de acordo com a tela testada (Cadastro de Funcionário / Tela Principal), e não por ordem de execução.
- **Relatórios Detalhados**: Integração com Allure Report para exibição visual de métricas, gráfico de tempo, etapas de execução e evidências automáticas (screenshots/vídeos) em caso de falhas.

## ✅ Casos de teste automatizados

A ordem apresentada representa a implementação dos testes automatizados.

| Caso | Descrição |
|------|-----------|
| CT-008 | Cadastro de funcionário com sucesso |
| CT-002 | Validação de layout e componentes da tela principal |
| CT-006 | Ação do botão "Ver apenas ativos" |
| CT-004 | Ação do botão "Limpar filtros" |
| CT-007 | Ação do botão "+ Adicionar Funcionário" |

## 🐛 Bugs identificados (não automatizados)

Os demais 21 casos de teste evidenciaram inconsistências no sistema (ex.: divergência entre nome cadastrado e nome exibido na listagem, ausência de validação de campos obrigatórios, entre outros). As evidências detalhadas de cada bug foram registradas.

## ▶️ Como executar o projeto

1. Clone o repositório:
   git clone https://github.com/dawidlucas/SEA-Tecnologia-Desafio-QA.git
   cd SEA-Tecnologia-Desafio-QA

2. Instale as dependências:
   npm install

3. Execute os testes e abra o Allure Report automaticamente (Recomendado):
   npm run test:report

4. Ou visualize apenas o relatório do Allure já gerado anteriormente:
   npm run allure:open

5. Execute os testes em modo interativo (Cypress abre em uma janela):
   npx cypress open

6. Ou execute em modo headless (via terminal, sem interface):
   npx cypress run

## 📊 Relatório de Execução (Allure Report)

O projeto conta com o **Allure Report** integrado. Ao executar o comando `npm run test:report`, um dashboard interativo será aberto automaticamente no seu navegador padrão contendo:
- Percentual e quantidade de testes com sucesso/falha.
- Tempo exato de execução por suíte e por teste.
- Passos detalhados executados dentro de cada cenário (*steps*).
- *Screenshots* automáticos anexados no relatório em caso de falhas.

## 📁 Repositório

📌 **GitHub**: [https://github.com/dawidlucas/SEA-Tecnologia-Desafio-QA](https://github.com/dawidlucas/SEA-Tecnologia-Desafio-QA)

Desenvolvido por Dawid Lucas como parte de um desafio técnico para um processo seletivo para a vaga de Analista de Testes (QA).