// pratica05/routers/ProdutoRouter.js
const express = require('express');
const router = express.Router();
const produtoController = require('./Controller');

// Rotas relacionadas aos produtos
router.get('/', produtoController.listarProdutos);
router.get('/:produtoId', produtoController.buscarProdutoPorId);
router.post('/', produtoController.adicionarProduto);
router.put('/:produtoId', produtoController.atualizarProduto);
router.delete('/:produtoId', produtoController.deletarProduto);

module.exports = router;
