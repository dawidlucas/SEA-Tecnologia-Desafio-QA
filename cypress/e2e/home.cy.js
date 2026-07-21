import homePage from '../pages/home.page.js'
import funcionarioPage from '../pages/cadastroFuncionario.page.js'

describe('Tela principal - Funcionários', () => {
    beforeEach(() => {
        homePage.acessarSite()
    })

    it('Validar layout e componentes da tela principal', () => {
        homePage.validarComponentesTelaPrincipal()
    })

    it('Validar ação do botão "Ver apenas ativos"', () => {
        homePage.clicarVerApenasAtivos()
        homePage.validarBotaoVerApenasAtivosVisivel()
    })

    it('Validar ação do botão "Limpar filtros"', () => {
        homePage.clicarVerApenasAtivos()
        homePage.clicarLimparFiltros()
        homePage.validarBotaoLimparFiltrosVisivel()
    })

    it('Validar ação no botão "+ Adicionar Funcionário"', () => {
        homePage.clicarAdicionarFuncionario()
        funcionarioPage.validarFormularioCadastroVisivel()
    })
})