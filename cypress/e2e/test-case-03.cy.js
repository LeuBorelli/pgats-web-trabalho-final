import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import signupLogin from '../pages/login/LoginPage.js'

describe('Login User with incorrect email and password', () => {

    it('Login de usuário com email e senha incorretos', () => {
        const dados = gerarDados()

        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoSignupLogin()

        signupLogin.verificarLoginToYourAccountVisivel()
        signupLogin.preencherLogin(dados.email, dados.senha)
        signupLogin.verificarLoginErrorMessage()
    })
})