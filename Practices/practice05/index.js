// index.js
const express = require('express');
const produtoRouter = require('./pratica05/routers/ProdutoRouter');

const app = express();

app.use(express.json());
app.use('/produtos', produtoRouter);

module.exports = app;
