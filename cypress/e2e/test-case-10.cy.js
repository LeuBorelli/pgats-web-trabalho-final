import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import footer from '../pages/components/FooterComponent.js'

describe('Verify Subscription in home page', () => {

    it('Verificação da subscrição na Pagina Inicial', () => {
        const dados = gerarDados()

        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()

        footer.verificarSubscriptionTitleVisivel()
        footer.preencherSubscriptionEmail(dados.email)
        footer.clicarSubscriptionButton()
        footer.verificarSubscriptionSuccessMessage()
    })
})