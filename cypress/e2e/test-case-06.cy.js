import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import contactUs from '../pages/contact/ContactUsPage.js'

describe('Contact Us Form', () => {
    const arquivoFixture = 'cypress/fixtures/upload.txt'
    
    it('Preencher e enviar o formulário "Contact Us"', () => {

        const dados = gerarDados()

        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoContactUs()

        contactUs.verificarGetInTouchVisivel()
        contactUs.preencherFormulario(
            dados.nome, 
            dados.email, 
            'Assunto: Teste de formulário e upload via Cypress', 
            'Esta é uma mensagem de um teste automatizado.'
        )
        contactUs.fazerUploadArquivo(arquivoFixture)

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press OK to proceed!')
        })

        contactUs.clicarBotaoSubmit()
        contactUs.verificarMensagemSucessoVisivel()
        contactUs.clicarBotaoHome()
        home.verificarPaginaInicialVisivel()
    })
})
