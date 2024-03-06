describe('Pagina de cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('isabela@email.com.br')
    cy.get('[data-test="fullName"]').type('Isabela Pessoa')
    cy.get('[data-test="registerUserName"]').type('isabelanap')
    cy.get('[data-test="registerPassword"]').type('isabela123')
    cy.contains('button', 'Register').click();
  })
})