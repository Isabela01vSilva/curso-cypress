describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[formcontrolname="email"]').type('isabela@email.com.br')
    cy.get('[formcontrolname="fullName"]').type('Isabela Pessoa')
    cy.get('[formcontrolname="userName"]').type('isabelanap')
    cy.get('[formcontrolname="password"]').type('isabela123')
    cy.contains('button', 'Register').click();
  })
})