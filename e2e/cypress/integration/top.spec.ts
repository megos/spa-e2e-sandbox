context('Flow', () => {
  it('login - has data - logout', () => {
    cy.visit('/')
    cy.get('input[name=id]').type('user1')
    cy.get('input[name=password]').type('user1password')
    cy.contains('button', 'Login').click()
    cy.contains('Top')

    cy.contains('data: 5').click()
    cy.contains('hello: 5')

    cy.contains('button', 'Logout').click()
    cy.contains('Login')
  })
})
