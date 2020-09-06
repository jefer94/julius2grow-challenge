/// <reference types="Cypress" />
// cy not support async functions as callback

// context('Post not load without token', () => {
//   it('Redirect', () => {
//     cy.fixture('user').then((user) => {
//       cy.clearLocalStorage()
//       cy.visit('/register')
//       cy.get('#username').type(user.username + 1)
//       cy.get('#email').type(user.email + 1)
//       cy.get('#current-password').type(user.password)
//       cy.get('#new-password').type(user.password)
//       cy.get('button').click()
//       cy.wait(500)
//       cy.location('pathname').should('eq', '/')
//     })
//   })
// })

context('Token', () => {
  it('Get user', () => {
    cy.fixture('user').then((user) => {
      // cy.clearLocalStorage()
      cy.clearLocalStorageCache()
      cy.visit('/register')
      cy.get('#username').type(user.username + 1)
      cy.get('#email').type(user.email + 1)
      cy.get('#current-password').type(user.password)
      cy.get('#new-password').type(user.password)
      cy.get('button').click()
      cy.wait(500)
      cy.location('pathname').should('eq', '/')
    })
  })
// })

// context('Posts', () => {
  // before(() => {
  //   cy.auth()
  //   cy.visit('/')
  // })

  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });
  
  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  it('Not have children', () => {
    // cy.visit('/')

    cy.get('#posts').children().should('not.exist')
  })
// })

// context('Add post', () => {
  // before(() => {
  //   cy.auth()
  //   cy.visit('/')
  // })

  it('Not have title', () => {
    cy.get('button').click()
    cy.contains('Titulo vacio')
  })

  it('Not have content', () => {
    cy.fixture('post').then((post) => {
      cy.get('#title').type(post.title)
      cy.get('button').click()
      cy.contains('Contenido vacio')
    })
  })

  it('Not have image', () => {
    cy.fixture('post').then((post) => {
      cy.get('#content').type(post.content)
      cy.log('ADD IMAGE HANDLER')
      // cy.get('#title').type(post.title)
      // cy.get('button').click()
      // cy.contains('Contenido vacio')
    })
  })

  it('Was added', () => {
    cy.get('button').click()
    cy.wait(500)
    // cy.contains('Post agregado').as('post')
    cy.wait(10001)
    // cy.get('@post').should('not.exist')
  })
})

