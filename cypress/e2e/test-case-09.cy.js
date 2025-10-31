import home from '../pages/home/HomePage.js'
import products from '../pages/products/ProductsPage.js'

describe('Search Product', () => {
    const buscaProduto = 'Blue'

    it('Buscar Produtos', () => {
        home.acessarPaginaInicial()
        home.verificarPaginaInicialVisivel()
        home.clicarBotaoProducts()

        products.verificarPaginaProdutosVisivel()
        products.buscarProduto(buscaProduto)
        products.verificarTituloSearchedProductsVisivel()
        products.verificarProdutosBuscadosVisiveis(buscaProduto)
    });
});