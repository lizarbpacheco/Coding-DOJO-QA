/// <reference types="Cypress" />

describe("Site Automation", () => {
    it('Acessar o Site Automation', () => {
        cy.visit('https://automationpractice.com/index.php')
        cy.get('.login').contains('Sign in')
    
    })

    it('Acessar Login', () => {
        cy.get('.login').click({force: true}).wait(2000)
        cy.get('.page-heading').contains('Authentication')
    })

    it('Criar conta', () => {
        cy.get('#email_create').type('teste@beedoo.com.br')
        cy.get('#SubmitCreate > span').click({force:true})
        cy.get('div.account_creation:nth-child(1) > h3:nth-child(1)').contains('Your personal information')
    })

    it('Preencher dados da conta',() => {
        cy.get('#customer_firstname').type('Teste')
        cy.get('#customer_lastname').type('sobrenome teste')
        cy.get('#passwd').type('12345')
        cy.get('#firstname').type('teste adress')

        
    })

});

