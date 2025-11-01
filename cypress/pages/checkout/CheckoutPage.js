class CheckoutPage {
    elements = {
        addressDetails: () => cy.get('.checkout-information'),
        descriptionTextArea: () => cy.get('.form-control[name="message"]'),
        placeOrderButton: () => cy.get('a[href="/payment"]')
    }

    verificarDetalhesEnderecoVisiveis() {
        this.elements.addressDetails().should('be.visible')
    }

    preencherDescricao(texto) {
        this.elements.descriptionTextArea().type(texto)
    }

    clicarPlaceOrder() {
        this.elements.placeOrderButton().click()
    }
}

export default new CheckoutPage()