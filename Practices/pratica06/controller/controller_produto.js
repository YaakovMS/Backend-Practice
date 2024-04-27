produtos =[]

function listarTodos(req , res){
    res.json(produtos)
}

function buscarPeloId(req,res){
const id = parseInt(req.params.id)
const produto = produtos.find(produto=>produto.id === id)
if(produto){
    res.json(produto)
}
else{
    res.status(404).json({msg: 'produto não encontrado '})
}
}


function criar(req,res){
if(req.body.nome && req.body.preco) {
    const novoProduto ={
        id: produto.length + 1,
        nome: req.body.name,
        preco:req.body.preco
    }
    produtos.push(novoProduto)
    res.status(201).json(novoProduto)
}else{
    res.status(422).json({msg:'campos obrigatórios'})
}
}

function atualizar(req,res){
    const id = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
        produtos[produtoIndex].nome = req.body.nome;
        produtos[produtoIndex].preco = req.body.preco;
        res.json(produtos[produtoIndex]);
    } else {
        res.status(404).json({ msg: "Produto não encontrado" });
    }
}

function remover(req,res){
    const id = parseInt(req.params.id);
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    if (produtoIndex !== -1) {
        produtos.splice(produtoIndex, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ msg: "Produto não encontrado" });
    }
}

module.exports = {
    listarTodos,
    buscarPeloId,
    criar,
    atualizar,
    remover
};
