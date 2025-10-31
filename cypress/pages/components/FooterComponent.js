class FooterComponent {
    elements = {
        subscriptionTitle: () => cy.contains('h2', 'Subscription'),
        subscriptionEmailInput: () => cy.get('#susbscribe_email'),
        subscriptionButton: () => cy.get('#subscribe'),
        successMessage: () => cy.get('.alert-success.alert')
    }

    verificarSubscriptionTitleVisivel() {
        cy.scrollTo('bottom')
        this.elements.subscriptionTitle().should('be.visible')
    }

    preencherSubscriptionEmail(email) {
        cy.scrollTo('bottom')
        this.elements.subscriptionEmailInput().type(email)
    }

    clicarSubscriptionButton() {
        this.elements.subscriptionButton().click()
    }

    verificarSubscriptionSuccessMessage() {
        this.elements.successMessage()
            .should('be.visible')
            .and('contain.text', 'You have been successfully subscribed!')
    }
}

export default new FooterComponent()