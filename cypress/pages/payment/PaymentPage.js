class PaymentPage {
    elements = {
        nameOnCardInput: () => cy.get('[data-qa="name-on-card"]'),
        cardNumberInput: () => cy.get('[data-qa="card-number"]'),
        cvcInput: () => cy.get('[data-qa="cvc"]'),
        expiryMonthInput: () => cy.get('[data-qa="expiry-month"]'),
        expiryYearInput: () => cy.get('[data-qa="expiry-year"]'),
        payButton: () => cy.get('[data-qa="pay-button"]'),
        successMessage: () => cy.contains('p', 'Congratulations! Your order has been confirmed!')
    }

    preencherDetalhesPagamento(dadosPagamento) {
        this.elements.nameOnCardInput().type(dadosPagamento.nome)
        this.elements.cardNumberInput().type(dadosPagamento.numero)
        this.elements.cvcInput().type(dadosPagamento.cvc)
        this.elements.expiryMonthInput().type(dadosPagamento.mes)
        this.elements.expiryYearInput().type(dadosPagamento.ano)
    }

    clicarPayAndConfirmOrder() {
        this.elements.payButton().click()
    }

    verificarMensagemPedidoSucesso() {
        this.elements.successMessage().should('be.visible')
    }
}

export default new PaymentPage()