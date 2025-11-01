import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import signupLogin from '../pages/login/LoginPage.js'

describe('Logout User', () => {
    let dados

    beforeEach(() => {
        dados = gerarDados()
        cy.registrarUsuarioApi(dados)
    })

    it('Deslogar o usuário', () => {
        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoSignupLogin()

        signupLogin.verificarLoginToYourAccountVisivel()
        signupLogin.preencherLogin(dados.email, dados.senha)

        home.verificarLoggedInAsUsernameVisivel(dados.nome)
        home.clicarBotaoLogout()
        signupLogin.verificarLoginToYourAccountVisivel()
    })
})