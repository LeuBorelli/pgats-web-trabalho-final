class HomePage {
    elements = {
        slider: () => cy.get('#slider-carousel'),
        signupLoginButton: () => cy.get('a[href="/login"]'),
        deleteAccountButton: () => cy.get('a[href="/delete_account"]'),
        loggedInAsText: () => cy.get('li:contains("Logged in as")'),
        logoutAccount: () => cy.get('[href="/logout"]'),
        contactUsButton: () => cy.get('a[href="/contact_us"]'),
        productsButton: () => cy.get('.shop-menu a[href="/products"]')
    }

    acessarPaginaInicial() {
        cy.visit('/')
    }

    verificarPaginaInicialVisivel() {
        this.elements.slider().should('be.visible')
    }

    clicarBotaoSignupLogin() {
        this.elements.signupLoginButton().click()
    }

    clicarBotaoDeleteAccount() {
        this.elements.deleteAccountButton().click()
    }

    verificarLoggedInAsUsernameVisivel(nome) {
        this.elements.loggedInAsText().should('contain.text', nome)
    }

    verificarMensagemAccountDeletedVisivel() {
        cy.contains('h2', 'Account Deleted!').should('be.visible')
    }

    clicarBotaoLogout() {
        this.elements.logoutAccount().click()
    }

    clicarBotaoContactUs() {
        this.elements.contactUsButton().click()
    }

    clicarBotaoProducts() {
        this.elements.productsButton().click()
    }
}

export default new HomePage()