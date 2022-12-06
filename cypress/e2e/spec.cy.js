describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/Miscellaneous/index.html')
    cy.get('.exes').find('li').should('have.length', 6)

    cy.get('#friends').find('label').should('have.length',5)
  })
})


 