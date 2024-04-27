const { Contato, inserir, alterar, deletar, buscar } = require('./modelo');

async function adicionarContato(nome, email, telefone) {
    const contato = new Contato(nome, email, telefone);
    await inserir(contato);
}

async function buscarContato(nome) {
    const contato = new Contato(nome);
    return await buscar(contato);
}

async function atualizarContato(nome, email, telefone) {
    const contato = await buscarContato(nome);
    if (contato) {
        contato.email = email;
        contato.telefone = telefone;
        await alterar(contato);
    }
}

async function removerContato(nome) {
    const contato = await buscarContato(nome);
    if (contato) {
        await deletar(contato);
    }
}

module.exports = { adicionarContato, buscarContato, atualizarContato, removerContato };
