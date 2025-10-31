import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import signupLogin from '../pages/login/LoginPage.js'
import signup from '../pages/signup/SignupPage.js'

describe('Register User', () => {
    let dados

    before(() => {
        dados = gerarDados()
    })

    it('Registrar um usuário', () => {
        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoSignupLogin()

        signupLogin.verificarNewUserSignupVisivel()
        signupLogin.preencherSignup(dados.nome, dados.email)
        signupLogin.clicarBotaoSignup()

        signup.verificarMensagemDoFormulario()
        signup.preencherFormularioCadastro(dados)
        signup.marcarCheckboxNewsletter()
        signup.marcarCheckboxOffers()
        signup.clicarBotaoCreateAccount()
        signup.verificarMensagemContaCriada()
        signup.clicarBotaoContinue()

        home.verificarLoggedInAsUsernameVisivel(dados.nome)
        home.clicarBotaoDeleteAccount()
        home.verificarMensagemAccountDeletedVisivel()
        
        signup.clicarBotaoContinue()
    })  
})