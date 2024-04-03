// pratica05/controllers/ProdutoController.js
const produtos = [];

// GET /produtos
const listarProdutos = (req, res) => {
    res.json(produtos);
}

// GET /produtos/:produtoId
const buscarProdutoPorId = (req, res) => {
    const produtoId = req.params.produtoId;
    const produto = produtos.find(p => p.id === parseInt(produtoId));
    if (!produto) return res.status(404).json({msg: 'Produto não encontrado'});
    res.json(produto);
}

// POST /produtos
const adicionarProduto = (req, res) => {
    const { nome, preco } = req.body;
    if (!nome || !preco) return res.status(422).json({msg: 'Nome e/ou preço do produto não informados'});
    
    const id = produtos.length + 1;
    const novoProduto = { id, nome, preco };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
}

// PUT /produtos/:produtoId
const atualizarProduto = (req, res) => {
    const produtoId = req.params.produtoId;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(produtoId));
    if (produtoIndex === -1) return res.status(404).json({msg: 'Produto não encontrado'});

    const { nome, preco } = req.body;
    if (!nome || !preco) return res.status(422).json({msg: 'Nome e/ou preço do produto não informados'});

    produtos[produtoIndex] = { id: parseInt(produtoId), nome, preco };
    res.json(produtos[produtoIndex]);
}

// DELETE /produtos/:produtoId
const deletarProduto = (req, res) => {
    const produtoId = req.params.produtoId;
    const produtoIndex = produtos.findIndex(p => p.id === parseInt(produtoId));
    if (produtoIndex === -1) return res.status(404).json({msg: 'Produto não encontrado'});

    produtos.splice(produtoIndex, 1);
    res.sendStatus(204);
}

module.exports = {
    listarProdutos,
    buscarProdutoPorId,
    adicionarProduto,
    atualizarProduto,
    deletarProduto
};
