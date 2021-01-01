context('Top page', () => {
  it('has messages', () => {
    cy.visit('/')
    cy.contains('Edit src/App.tsx and save to reload.')
  })
})
