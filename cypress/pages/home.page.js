class HomePage {
    acessarSite() {
        cy.viewport(1440, 900)
        cy.visit('/')
    }

    clicarAdicionarFuncionario() {
        cy.contains('button', '+ Adicionar Funcionário')
            .click()
    }

    clicarVerApenasAtivos() {
        cy.contains('button', 'Ver apenas ativos')
            .click()
    }

    clicarLimparFiltros() {
        cy.contains('button', 'Limpar filtros')
            .click()
    }

    validarRedirecionamentoSucesso() {
        cy.contains('h2', 'Funcionário(s)')
            .should('be.visible')
    }

    validarComponentesTelaPrincipal() {
        cy.contains('h2', 'Funcionário(s)')
            .should('be.visible')

        cy.contains('button', '+ Adicionar Funcionário')
            .should('be.visible')

        cy.contains('button', 'Ver apenas ativos')
            .should('be.visible')

        cy.contains('button', 'Limpar filtros')
            .should('be.visible')

        cy.contains('button', 'Próximo passo')
            .should('be.visible')

        cy.contains('Ativos')
            .should('be.visible')
    }

    validarBotaoVerApenasAtivosVisivel() {
        cy.contains('button', 'Ver apenas ativos')
            .should('be.visible')
    }

    validarBotaoLimparFiltrosVisivel() {
        cy.contains('button', 'Limpar filtros')
            .should('be.visible')
    }

}

export default new HomePage()