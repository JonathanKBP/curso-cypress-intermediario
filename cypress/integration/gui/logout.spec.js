/// <reference types="Cypress" />

describe('Logout', () => {
    before(() => cy.login())

    it('successfully', () => {
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
})