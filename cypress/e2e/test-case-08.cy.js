import home from '../pages/home/HomePage.js'
import products from '../pages/products/ProductsPage.js'
import productDetail from '../pages/product-detail/ProductDetailPage.js'

describe('Verify All Products and product detail page', () => {

    it('Deve navegar para a página de produtos e ver os detalhes do primeiro item', () => {
        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoProducts()

        products.verificarPaginaProdutosVisivel()
        products.verificarListaProdutosVisivel()
        products.clicarViewProductPrimeiroItem()

        productDetail.verificarDetalhesProdutoVisiveis()
    })
})