// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/** -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { ... })

Criação de usuário pela API
*/

Cypress.Commands.add('registrarUsuarioApi', (user) => {
    cy.log(`Criando um usuário via API: ${user.email}`)

    cy.request({
        method: 'POST',
        url: '/api/createAccount',
        form: true,
        body: {
            'title': user.titulo,
            'name': user.nomeCompleto,
            'email': user.email,
            'password': user.senha,
            'days': user.diaNascimento,
            'months': user.mesNascimento,
            'years': user.anoNascimento,
            'firstname': user.nome,
            'lastname': user.sobrenome,
            'company': user.empresa,
            'address1': user.endereco1,
            'address2': user.endereco2,
            'country': user.pais,
            'state': user.estado,
            'city': user.cidade,
            'zipcode': user.cep,
            'mobile_number': user.numeroCelular
        }
    }).then((response) => {
        expect(response.status).to.equal(200)

        const body = JSON.parse(response.body)

        expect(body.responseCode).to.equal(201)
        expect(body.message).to.equal("User created!")
    })
})