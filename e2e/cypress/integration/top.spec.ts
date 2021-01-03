context('Top page', () => {
  it('has messages', () => {
    cy.visit('/')

    cy.get('input[name=id]').type('user1')
    cy.get('input[name=password]').type('user1password')
    cy.contains('button', 'Login').click()

    cy.contains('hi')
  })
})
