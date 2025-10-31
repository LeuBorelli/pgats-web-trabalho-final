import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import signupLogin from '../pages/login/LoginPage.js'

describe('Register User with existing email', () => {
    let dados

    beforeEach(() => {
        dados = gerarDados()
        cy.registrarUsuarioApi(dados)
    })

    it('Registrar usuário com email existente', () => {
        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoSignupLogin()

        signupLogin.verificarLoginToYourAccountVisivel()
        signupLogin.preencherSignup(dados.nome, dados.email)
        signupLogin.clicarBotaoSignup()
        signupLogin.verificarSignupErrorMessage()
    })
})