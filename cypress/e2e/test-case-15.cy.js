import { gerarDados } from '../support/helpers.js'
import home from '../pages/home/HomePage.js'
import signupLogin from '../pages/login/LoginPage.js'
import signup from '../pages/signup/SignupPage.js'
import products from '../pages/products/ProductsPage.js'
import cart from '../pages/cart/CartPage.js'
import checkout from '../pages/checkout/CheckoutPage.js'
import payment from '../pages/payment/PaymentPage.js'

describe('Place Order: Register before Checkout', () => {
  
    it('Registrar um usuário antes de fechar um pedido', () => {
        const dados = gerarDados()

        const dadosPagamento = {
            nome: 'Usuário Testenilson',
            numero: '5155901222280001',
            cvc: '123',
            mes: '12',
            ano: '2029'
        }

        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoSignupLogin()

        signupLogin.verificarNewUserSignupVisivel()
        signupLogin.preencherSignup(dados.nome, dados.email)
        signupLogin.clicarBotaoSignup()

        signup.verificarMensagemDoFormulario()
        signup.preencherFormularioCadastro(dados)
        signup.clicarBotaoCreateAccount()
        signup.verificarMensagemContaCriada()
        signup.clicarBotaoContinue()

        home.verificarLoggedInAsUsernameVisivel(dados.nome)
        home.clicarBotaoProducts()

        products.verificarPaginaProdutosVisivel()
        products.adicionarPrimeiroProdutoAoCarrinho()
        products.clicarViewCartNoModal()

        cart.verificarPaginaCarrinhoVisivel()
        cart.clicarProceedToCheckout()

        checkout.verificarDetalhesEnderecoVisiveis()
        checkout.preencherDescricao('Pedido teste com Cypress')
        checkout.clicarPlaceOrder()

        payment.preencherDetalhesPagamento(dadosPagamento)
        payment.clicarPayAndConfirmOrder()
        payment.verificarMensagemPedidoSucesso()

        home.clicarBotaoDeleteAccount()
        home.verificarMensagemAccountDeletedVisivel()

        signup.clicarBotaoContinue()
  })  
})