/// <reference types="Cypress" />

context('Check editor global attributes', () => {
  it('Can visit page', () => {
    cy.visit('/login')
  })

  it('Without username', async () => {
    const user = await cy.fixture('user')
    cy.get('#current-password').type(user.password)
    cy.get('button').click()
    cy.contains('Nombre de usuario vacio').should('be.visible')
  })

  it('Without password', async () => {
    const user = await cy.fixture('user')
    cy.get('#username').type(user.username)
    cy.get('#current-password').clear()
    cy.get('button').click()
    cy.contains('Contraseña vacia').should('be.visible')
  })

  it('User no exist', async () => {
    const user = await cy.fixture('user')
    cy.get('#username').clear()
    cy.get('#username').type(user.username)
    cy.get('#current-password').clear()
    cy.get('#current-password').type(user.password)
    cy.get('button').click()
    cy.contains('Nombre de usuario o contraseña equivocado').should('be.visible')
  })

  it('Go to register', () => {
    cy.contains('registrate').and('have.attr', 'href').and('match', /^\/register$/)
    cy.visit('/register')

  })

  it('Without username', async () => {
    cy.get('button').click()
    cy.contains('Nombre de usuario vacio').should('be.visible')
  })

  it('Without email', async () => {
    const user = await cy.fixture('user')
    cy.get('#username').type(user.username)
    cy.get('button').click()
    cy.contains('Correo vacio').should('be.visible')
  })

  it('Without password', async () => {
    const user = await cy.fixture('user')
    cy.get('#email').type(user.email)
    cy.get('button').click()
    cy.contains('Contraseña vacia').should('be.visible')
  })

})
