import { usuario } from "../helpers/fakerHelper"

class FuncionarioPage {
    mudarStatusParaAtivo() {
        cy.contains('button', 'Inativo')
            .click()
    }

    preencherNome() {
        const dados = usuario()
        cy.get('input[name="name"]')
            .type(dados.nome)
    }

    selecionarSexoMasculino() {
        cy.get('input[value="masculino"]')
            .check()
    }

    preencherCpf(cpf) {
        cy.get('input[name="cpf"]')
            .type(cpf)
    }

    preencherDataNascimento(data) {
        cy.get('input[name="birthDay"]')
            .type(data)
    }

    preencherRg(rg) {
        cy.get('input[name="rg"]')
            .type(rg)
    }

    selecionarCargo(cargo) {
        cy.contains('label', 'Cargo')
            .parent()
            .find('.ant-select')
            .click()

        cy.contains('.ant-select-item-option', cargo)
            .click()
    }

    marcarNaoUsaEpi() {
        cy.contains('label', 'O trabalhador não usa EPI.')
            .parent()
            .find('input[type="checkbox"]')
            .check({ force: true })
    }

    anexarAtestado(caminhoArquivo) {
        cy.get('input[name="file"]')
            .selectFile(caminhoArquivo, { force: true })
    }

    clicarSalvar() {
        cy.contains('button', 'Salvar')
            .click()
    }

    validarFormularioCadastroVisivel() {
        cy.contains('div', 'Adicionar Funcionário')
            .should('be.visible')
    }

    validarStatusAtivo() {
        cy.contains('button', 'Ativo')
            .should('be.visible')
    }

    validarSexoMasculinoSelecionado() {
        cy.get('input[value="masculino"]')
            .should('be.checked')
    }
}

export default new FuncionarioPage()