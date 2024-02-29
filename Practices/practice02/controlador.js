// controlador.js

const Contato = require('./modelo');

// c) Declare uma constante contatos inicializando com um array vazio.
const contatos = [];

// d) Declare a função adicionarContato() que deve receber os parâmetros nome, email e telefone.
function adicionarContato(nome, email, telefone) {
    // e) Crie uma instância de Contato na constante novoContato.
    const novoContato = new Contato(nome, email, telefone);
    
    // f) Adicione novoContato no array contatos.
    contatos.push(novoContato);
}

// g) Declare a função listarContatos() sem parâmetros.
function listarContatos() {
    // h) Faça a função listarContatos() retornar o array contatos.
    return contatos;
}

// i) Declare a função buscarContato() que deve receber o parâmetro nome.
function buscarContato(nome) {
    // j) Faça a função buscarContato() localizar um contato no array contatos pelo nome.
    return contatos.find(contato => contato.nome === nome);
}

// k) Declare a função atualizarContato() que deve receber os parâmetros nome, email e telefone.
function atualizarContato(nome, email, telefone) {
    // l) Faça a função atualizarContato() chamar a função buscarContato(). Se encontrar o contato, atualize as propriedades email e telefone com os parâmetros da função.
    const contatoEncontrado = buscarContato(nome);
    if (contatoEncontrado) {
        contatoEncontrado.email = email;
        contatoEncontrado.telefone = telefone;
    }
}

// m) Declare a função removerContato() que deve receber o parâmetro nome.
function removerContato(nome) {
    // n) Faça a função removerContato() localizar a posição de um contato no array contatos pelo nome. Se encontrar, recorte um elemento do array contatos a partir da posição do contato.
    const index = contatos.findIndex(contato => contato.nome === nome);
    if (index !== -1) {
        contatos.splice(index, 1);
    }
}

// o) Exporte todas as funções para serem utilizadas por outros módulos.
module.exports = {
    adicionarContato,
    listarContatos,
    buscarContato,
    atualizarContato,
    removerContato
};
