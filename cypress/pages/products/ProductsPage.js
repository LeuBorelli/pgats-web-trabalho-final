class ProductsPage {
    elements = {
        allProductsTitle: () => cy.contains('h2', 'All Products'),
        productsList: () => cy.get('.features_items'),
        firstItemProductViewButton: () => cy.get('.features_items a[href="/product_details/1"]'),
        searchInput: () => cy.get('#search_product'),
        searchButton: () => cy.get('#submit_search'),
        searchedProductsTitle: () => cy.contains('h2', 'Searched Products'),
        productListNames: () => cy.get('.features_items .productinfo p'),
        firstProductAddToCartButton: () => cy.get('.features_items .add-to-cart').first(),
        viewCartButtonModal: () => cy.get('.modal-body a[href="/view_cart"]')
    }

    verificarPaginaProdutosVisivel() {
        this.elements.allProductsTitle().should('be.visible')
    }

    verificarListaProdutosVisivel() {
        this.elements.productsList().should('be.visible')
    }

    clicarViewProductPrimeiroItem() {
        this.elements.firstItemProductViewButton().click()
    }

    buscarProduto(nomeProduto) {
        this.elements.searchInput().type(nomeProduto)
        this.elements.searchButton().click()
    }
    
    verificarTituloSearchedProductsVisivel() {
        this.elements.searchedProductsTitle().should('be.visible')
    }

    verificarProdutosBuscadosVisiveis(nomeProduto) {
        this.elements.productListNames().should('have.length.greaterThan', 0)
        this.elements.productListNames().each((item) => {
            cy.wrap(item).invoke('text').then((texto) => {
                expect(texto.toUpperCase()).to.include(nomeProduto.toUpperCase())
            })
        })
    }

    adicionarPrimeiroProdutoAoCarrinho() {
        this.elements.firstProductAddToCartButton().click()
    }

    clicarViewCartNoModal() {
        this.elements.viewCartButtonModal().click()
    }
}

export default new ProductsPage()