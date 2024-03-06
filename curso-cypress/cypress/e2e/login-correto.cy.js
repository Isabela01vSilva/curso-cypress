describe('Pagina de login', () => {
    it('Preenchendo os campos do login corretamente para realizar login', () => {
      cy.visit('http://localhost:4200/#/home')

      cy.get('[data-test="loginUserName"]').type('isabelanap')
      cy.get('[data-test="loginPassword"]').type('isabela123')
      
      cy.contains('button', 'login').click();
    })
  })