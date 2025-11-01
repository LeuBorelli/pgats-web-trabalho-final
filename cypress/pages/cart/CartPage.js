class CartPage {
    elements = {
        shoppingCartTitle: () => cy.get('li.active:contains("Shopping Cart")'),
        proceedToCheckoutButton: () => cy.get('.btn.btn-default.check_out')
    }

    verificarPaginaCarrinhoVisivel() {
        this.elements.shoppingCartTitle().should('be.visible')
    }

    clicarProceedToCheckout() {
        this.elements.proceedToCheckoutButton().click()
    }
}

export default new CartPage()