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

    })

});

