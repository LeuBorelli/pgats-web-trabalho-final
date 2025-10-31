import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import signupLogin from '../pages/login/LoginPage.js'
import signup from '../pages/signup/SignupPage.js'

describe('Login User with correct email and password', () => {
    let dados

    beforeEach(() => {
        dados = gerarDados()
        cy.registrarUsuarioApi(dados)
    })

    it('Login de usuário com email e senha corretos', () => {
        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoSignupLogin()
        
        signupLogin.verificarLoginToYourAccountVisivel()
        signupLogin.preencherLogin(dados.email, dados.senha)

        home.verificarLoggedInAsUsernameVisivel(dados.nome)
        home.clicarBotaoDeleteAccount()
        home.verificarMensagemAccountDeletedVisivel()
                
        signup.clicarBotaoContinue()
    })
})