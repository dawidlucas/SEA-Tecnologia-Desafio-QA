# Desafio Técnico QA — Automação de Testes (Cypress)

Este repositório contém a automação de testes desenvolvida em Cypress e a documentação completa do processo de QA.

---

Automação de testes end-to-end para o fluxo de **cadastro de funcionários** e a **tela principal de listagem**, desenvolvida como parte de um desafio técnico para vaga de QA.

## 🎯 Sobre o projeto

Durante a análise do sistema, foram mapeados **25 casos de teste**. Desses, **21 evidenciaram bugs** no sistema avaliado (comportamentos inconsistentes, dados divergentes na listagem, ausência de regras de negócio, entre outros). Os **5 casos considerados estáveis e passíveis de automação** foram implementados neste projeto, seguindo o padrão **Page Object Model (POM)**.

A decisão de não automatizar os casos com bug foi intencional: automatizar sobre um comportamento instável geraria testes "flaky" (instáveis), que falham por causa do bug e não por regressão real — o que reduz a confiabilidade da suíte de testes. Esses casos foram documentados separadamente como evidências de bug.


## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [Allure Report](https://allurereport.org/) — Framework de relatórios interativos e métricas de execução
- [Faker.js (pt-BR)](https://fakerjs.dev/) — geração de dados fictícios para os testes
- JavaScript (ES6+)
- GitHub Actions — pipeline de Integração Contínua (CI)

## 📁 Estrutura do projeto

```text
.github/
└── workflows/
    └── cypress.yml                 # Pipeline de CI (GitHub Actions)
cypress/
├── e2e/
│   ├── cadastroFuncionario.cy.js   # Testes do fluxo de cadastro de funcionário
│   └── home.cy.js                  # Testes da tela principal (listagem, filtros, navegação)
├── fixtures/
│   ├── cadastroValidoDados.json    # Massa de dados para cadastro válido
│   └── atestado.pdf                # Arquivo utilizado no upload de atestado
├── helpers/
│   └── fakerHelper.js              # Geração de dados dinâmicos (nome, etc.)
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

## 🐛 Bugs identificados e Documentação de QA

Os demais 21 casos de teste evidenciaram inconsistências no sistema (ex.: divergência entre nome cadastrado e nome exibido na listagem, ausência de validação de campos obrigatórios, entre outros).

A documentação completa do processo de testes, estratégia e evidências de bugs foi centralizada e está disponível nos links abaixo:

- 📊 **[Acessar Cenários de Teste (Google Sheets)](https://docs.google.com/spreadsheets/d/1msF7DpDPeZbI6fjiuAmaDz7M7xcuLy0V/edit?gid=455362360#gid=455362360)**  
  *Mapeamento completo dos 25 casos de teste*

- 🐛 **[Acessar Defeitos / Bugs (Google Sheets)](https://docs.google.com/spreadsheets/d/1isI2iL4zDZA4zmOwyDnx_PzH3WvhFowB/edit?gid=455362360#gid=455362360)**  
  *Relatório detalhado contendo a evidência e passo a passo de cada um dos 21 bugs identificados.*

- 📝 **[Acessar Plano de Testes (Google Docs)](https://docs.google.com/document/d/14cqNsBy08BXaoojO4vwt8XNRHWhmuNzF/edit)**  

- 📝 **[Acessar Nota de Estratégia (Google Docs)](https://docs.google.com/document/d/1j2XPpxXvwGc2VGYIw64koYPhhlEdlqnl/edit?rtpof=true&tab=t.0)**  

- 📝 **[Acessar Diário de Uso de IA (Google Docs)](https://docs.google.com/document/d/1LGUsFLWtY2hUdzje6PxVaRl06b2m-MAH/edit)**  

- 📝🐛 **[Acessar Relatório de Defeitos (Google Docs)](https://docs.google.com/document/d/1pSa0C5Prtd5R9lZrsGxxn1D4aPgeIZjg/edit)**
  
  

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

## 🔄 Integração Contínua (CI)

Como iniciativa adicional (não solicitada no desafio), o projeto conta com um pipeline de CI configurado em .github/workflows/cypress.yml. Ele roda automaticamente a cada push ou Pull Request para a branch main:

- Faz checkout do código
- Instala Node.js (mesma versão utilizada localmente) e as dependências
- Executa a suíte completa de testes Cypress em modo headless
- Em caso de falha, anexa screenshots e vídeos da execução ao resultado do workflow

## 📊 Relatório de Execução (Allure Report)

O projeto conta com o **Allure Report** integrado. Ao executar o comando `npm run test:report`, um dashboard interativo será aberto automaticamente no seu navegador padrão contendo:
- Percentual e quantidade de testes com sucesso/falha.
- Tempo exato de execução por suíte e por teste.
- Passos detalhados executados dentro de cada cenário (*steps*).
- *Screenshots* automáticos anexados no relatório em caso de falhas.

## 📁 Repositório

📌 **GitHub**: [https://github.com/dawidlucas/SEA-Tecnologia-Desafio-QA](https://github.com/dawidlucas/SEA-Tecnologia-Desafio-QA)

Desenvolvido por Dawid Lucas como parte de um desafio técnico para um processo seletivo para a vaga de Analista de Testes (QA).