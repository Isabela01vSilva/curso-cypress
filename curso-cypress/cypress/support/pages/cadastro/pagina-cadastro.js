const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }
    preencherFormulario() {
        cy.get('input[data-test="email"]').type('xxxx@xxxx.com.br')
        cy.get('input[data-test="fullName"]').type('xxxx xxxx')
        cy.get('input[data-test="registerUserName"]').type('xxxx')
        cy.get('input[data-test="registerPassword"]').type('xxxx123')
    }
    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();