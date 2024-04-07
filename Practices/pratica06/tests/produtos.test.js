const supertest = require('supertest')
const app = require('../app')

const request = supertest(app)

it('Deve retornar um 201 e json no post/produtos', async () => {
    const response = await request.post('/produtos').send({ nome: 'uva', preco: 20.00 });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', 'uva');
    expect(response.body).toHaveProperty('preco', 20.00);
});

it('Deve retornar um 200 e um json no get/produtos', async () => {
    const response = await request.get('/produtos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});

it('Deve retornar um 200 e json no get/produtos/1', async () => {
    const expectedData = {
        id: 1,
        nome: 'uva',
        preco: 15.00
    };
    const response = await request.get('/produtos/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedData);
});

it('Deve retornar um 404 e uma msg no get/produtos/100',async ()=>{
    const response = await request.get('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('msg','produto não encontrado')
})

it('deve retornar um 422 post /produtos sem json',async ()=>{
    const response = await request.post('/produtos')
    expect(response.status).toBe(422)
    expect(response.body).toEqual({'msg':'Campos Obrigatorios'})
})
it('deve retorar um 200 no put/produtos/1 e um json', async ()=>{
    const response = await request.put('/produtos/1').send({id:1,nome:'uva-verde',preco:18.00})
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('nome', 'uva verde');
    expect(response.body).toHaveProperty('preco', 18.00);
})

it('Deve retornar um 404 e uma msg no put/produtos/100',async ()=>{
    const response = await request.put('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('msg','produto não encontrado')
})
it('deve retornar um 204 no delete /produtos/1', async ()=>{
    const response= await request.delete('/produtos/1')
    expect(response.status).toBe(204)
    expect(response.body).toEqual({})
})
it('Deve retornar um 404 e uma msg no delete/produtos/100',async ()=>{
    const response = await request.delete('/produtos/100')
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty('msg','produto não encontrado')
})
