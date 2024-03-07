 describe('Buscando dados ', () => {
    it('Dados do usuario', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(3)
        })
    })
}) 

describe('Fotos do usuario', () => {
    it('Dados do usuario', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/isabelanap/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('porquinho')
        })
    })
})