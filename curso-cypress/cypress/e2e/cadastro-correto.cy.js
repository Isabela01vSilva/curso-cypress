describe('Pagina de cadastro', () => {
  
  beforeEach(() =>{
    cy.visit('http://localhost:4200/#/home')
  })

  it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    
    cy.contains('[data-test="register"]').click();
    cy.get('[data-test="email"]').type('isabela@email.com.br')
    cy.get('[data-test="fullName"]').type('Isabela Pessoa')
    cy.get('[data-test="registerUserName"]').type('isabelanap')
    cy.get('[data-test="registerPassword"]').type('isabela123')
    cy.contains('[data-test="btnRegister"]').click();
  })
})