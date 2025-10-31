class LoginPage {
    elements = {
        newUserSignupText: () => cy.contains('New User Signup!'),
        signupNameInput: () => cy.get('[data-qa="signup-name"]'),
        signupEmailInput: () => cy.get('[data-qa="signup-email"]'),
        signupButton: () => cy.get('[data-qa="signup-button"]'),
        loginToYourAccountText: () => cy.contains('Login to your account'),
        loginEmailInput: () => cy.get('[data-qa="login-email"]'),
        loginPasswordInput: () => cy.get('[data-qa="login-password"]'),
        loginButton: () => cy.get('[data-qa="login-button"]'),
        loginErrorText: () => cy.get('.login-form p[style="color: red;"]'),
        signupErrorText: () => cy.get('.signup-form p[style="color: red;"]')


    }

    verificarNewUserSignupVisivel() {
        this.elements.newUserSignupText().should('be.visible')
    }

    preencherSignup(nome, email) {
        this.elements.signupNameInput().type(nome)
        this.elements.signupEmailInput().type(email)
    }

    clicarBotaoSignup() {
        this.elements.signupButton().click()
    }

    verificarLoginToYourAccountVisivel() {
        this.elements.loginToYourAccountText().should('be.visible')
    }

    preencherLogin(email, senha) {
        this.elements.loginEmailInput().type(email)
        this.elements.loginPasswordInput().type(senha)
        this.elements.loginButton().click()
    }

    verificarLoginErrorMessage() {
        this.elements.loginErrorText()
            .should('be.visible')
            .and('contain.text', 'Your email or password is incorrect!')
    }

    verificarSignupErrorMessage() {
        this.elements.signupErrorText()
            .should('be.visible')
            .and('contain.text', 'Email Address already exist!')
    }
}

export default new LoginPage()