class SignupPage {
    elements = {
        enterAccountInfoTitle: () => cy.contains('Enter Account Information'),
        titleMr: () => cy.get('#id_gender1'),
        titleMrs: () => cy.get('#id_gender2'),
        passwordInput: () => cy.get('[data-qa="password"]'),
        daysSelect: () => cy.get('[data-qa="days"]'),
        monthsSelect: () => cy.get('[data-qa="months"]'),
        yearsSelect: () => cy.get('[data-qa="years"]'),
        newsletterCheckbox: () => cy.get('#newsletter'),
        offersCheckbox: () => cy.get('#optin'),
        firstNameInput: () => cy.get('[data-qa="first_name"]'),
        lastNameInput: () => cy.get('[data-qa="last_name"]'),
        companyInput: () => cy.get('[data-qa="company"]'),
        address1Input: () => cy.get('[data-qa="address"]'),
        address2Input: () => cy.get('[data-qa="address2"]'),
        countrySelect: () => cy.get('[data-qa="country"]'),
        stateInput: () => cy.get('[data-qa="state"]'),
        cityInput: () => cy.get('[data-qa="city"]'),
        zipcodeInput: () => cy.get('[data-qa="zipcode"]'),
        mobileNumberInput: () => cy.get('[data-qa="mobile_number"]'),
        createAccountButton: () => cy.get('[data-qa="create-account"]'),
        accountCreatedTitle: () => cy.contains('h2', 'Account Created!'),
        continueButton: () => cy.get('[data-qa="continue-button"]')
    }

    verificarMensagemDoFormulario() {
        this.elements.enterAccountInfoTitle().should('be.visible')
    }

    preencherFormularioCadastro(dados) {
        if (dados.titulo === 'Mr') {
            this.elements.titleMr().check()
        } else {
            this.elements.titleMrs().check()
        }

        this.elements.passwordInput().type(dados.senha)
        this.elements.daysSelect().select(dados.diaNascimento)
        this.elements.monthsSelect().select(dados.mesNascimento)
        this.elements.yearsSelect().select(dados.anoNascimento)
        this.elements.firstNameInput().type(dados.nome)
        this.elements.lastNameInput().type(dados.sobrenome)
        this.elements.companyInput().type(dados.empresa)
        this.elements.address1Input().type(dados.endereco1)
        this.elements.address2Input().type(dados.endereco2)
        this.elements.countrySelect().select(dados.pais)
        this.elements.stateInput().type(dados.estado)
        this.elements.cityInput().type(dados.cidade)
        this.elements.zipcodeInput().type(dados.cep)
        this.elements.mobileNumberInput().type(dados.numeroCelular)
    }

    marcarCheckboxNewsletter() {
        this.elements.newsletterCheckbox().check()
    }

    marcarCheckboxOffers() {
        this.elements.offersCheckbox().check()
    }

    clicarBotaoCreateAccount() {
        this.elements.createAccountButton().click()
    }

    verificarMensagemContaCriada() {
        this.elements.accountCreatedTitle().should('be.visible')
    }

    clicarBotaoContinue() {
        this.elements.continueButton().click()
    }
}

export default new SignupPage()