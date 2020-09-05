/// <reference types="Cypress" />

context('Check editor global attributes', () => {
  it('Can visit page', () => {
    cy.visit('/login')
  })

  it('Contain correct text in navbar', () => {
    cy.get('#username').type('Konan')
    cy.get('#current-password').type('123Konan!')
    cy.get('button').click()
  })
})
