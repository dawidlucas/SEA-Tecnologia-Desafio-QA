import userData from '../fixtures/cadastroValidoDados.json'
import homePage from '../pages/home.page.js'
import funcionarioPage from '../pages/cadastroFuncionario.page.js'

describe('Cadastro de funcionário', () => {
  before(() => {
    homePage.acessarSite()
    homePage.clicarAdicionarFuncionario()
  })

  it('Validar cadastro de funcionário com sucesso', () => {
    funcionarioPage.validarFormularioCadastroVisivel()
    funcionarioPage.mudarStatusParaAtivo()
    funcionarioPage.validarStatusAtivo()
    funcionarioPage.preencherNome()
    funcionarioPage.selecionarSexoMasculino()
    funcionarioPage.validarSexoMasculinoSelecionado()
    funcionarioPage.preencherCpf(userData.cpf)
    funcionarioPage.preencherDataNascimento('2000-12-08')
    funcionarioPage.preencherRg(userData.rg)
    funcionarioPage.selecionarCargo('Cargo 02')
    funcionarioPage.marcarNaoUsaEpi()
    funcionarioPage.anexarAtestado('cypress/fixtures/atestado.pdf')
    funcionarioPage.clicarSalvar()

    homePage.validarRedirecionamentoSucesso()
  })
})