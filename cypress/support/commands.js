
//Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => { // hard coded
//    cy.get('#firstName').type('Roberta')
//    cy.get('#lastName').type('Pardo')
//    cy.get('#email').type('robertapardo@teste.com')
//    cy.get('#open-text-area').type('teste')
//    cy.get('button[type="submit"]').click()
//})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ( data = {
    firstName: 'Roberta',
    lastName: 'Pardo',
    email: 'robertapardo@teste.com',
    text: 'Teste'
} )  => { // valores padroes
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})