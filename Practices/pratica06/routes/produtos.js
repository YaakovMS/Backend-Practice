const express = require('express')

const controller = require('../controller/controller_produto')

const router = express.Router()

router.get('/produtos', controller.listarTodos)

router.get('/produtos/:produtoId', controller.buscarPeloId)

router.post('/produtos',controller.criar)

router.put('/produtos/:produtoId',controller.atualizar)

router.delete('/produtos/:produtoId',controller.remover)


module.exports = router