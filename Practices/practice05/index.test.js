const supertest = require('supertest')
const app = require('./index')

const request = supertest(app)

describe('Testes GET', () => {
    it('Deve retornar um 200 e um JSON em /produtos', async () => {
        const response = await request.get('/produtos')
        expect(response.status).toBe(200)
        expect(response.header['content-type']).toMatch(/json/i)
    })

    it('Deve retornar um 200 e um JSON em /produtos/1', async () => {
        const response = await request.get('/produtos/1')
        expect(response.status).toBe(200)
        expect(response.header['content-type']).toMatch(/json/i)
    })

    it('Deve retornar um 404 em /produtos/100', async () => {
        const response = await request.get('/produtos/100')
        expect(response.status).toBe(404)
    })
})

describe('Testes POST', () => {
    it('Deve retornar um 201 e um JSON', async () => {
        const response = await request.post('/produtos').send({ nome: 'uva', preco: 20.00 })
        expect(response.status).toBe(201)
        expect(response.header['content-type']).toMatch(/json/i)
    })

    it('Deve retornar um 422 sem JSON', async () => {
        const response = await request.post('/produtos')
        expect(response.status).toBe(422)
        expect(response.header['content-type']).toMatch(/json/i)
    })
})

describe('Testes PUT', () => {
    it('Deve retornar um 200 e um JSON em /produtos/1', async () => {
        const response = await request.put('/produtos/1').send({ nome: 'uva verde', preco: 18.00 })
        expect(response.status).toBe(200)
        expect(response.header['content-type']).toMatch(/json/i)
    })

    it('Deve retornar um 404 em /produtos/100', async () => {
        const response = await request.put('/produtos/100')
        expect(response.status).toBe(404)
    })
})

describe('Testes DELETE', () => {
    it('Deve retornar um 204 em /produtos/1', async () => {
        const response = await request.delete('/produtos/1')
        expect(response.status).toBe(204)
    })

    it('Deve retornar um 404 em /produtos/100', async () => {
        const response = await request.delete('/produtos/100')
        expect(response.status).toBe(404)
    })
})
