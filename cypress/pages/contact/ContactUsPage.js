class ContactUsPage {
    elements = {
        getInTouchTitle: () => cy.contains('h2', 'Get In Touch'),
        nameInput: () => cy.get('[data-qa="name"]'),
        emailInput: () => cy.get('[data-qa="email"]'),
        subjectInput: () => cy.get('[data-qa="subject"]'),
        messageInput: () => cy.get('[data-qa="message"]'),
        uploadFileInput: () => cy.get('input[name="upload_file"]'),
        submitButton: () => cy.get('[data-qa="submit-button"]'),
        successMessage: () => cy.get('.status.alert.alert-success'),
        homeButton: () => cy.get('#form-section a[href="/"]')
    }

    verificarGetInTouchVisivel() {
        this.elements.getInTouchTitle().should('be.visible')
    }

    preencherFormulario(nome, email, assunto, mensagem) {
        this.elements.nameInput().type(nome)
        this.elements.emailInput().type(email)
        this.elements.subjectInput().type(assunto)
        this.elements.messageInput().type(mensagem)
    }

    fazerUploadArquivo(nomeArquivo) {
        this.elements.uploadFileInput().selectFile(nomeArquivo)
    }

    clicarBotaoSubmit() {
        this.elements.submitButton().click()
    }

    verificarMensagemSucessoVisivel() {
        this.elements.successMessage()
            .should('be.visible')
            .and('contain.text', 'Success! Your details have been submitted successfully.')
    }

    clicarBotaoHome() {
        this.elements.homeButton().click()
    }
}

export default new ContactUsPage()