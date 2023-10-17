const express = require('express');

const todoList  = require('./controladores/to-do-list');

const rotas = express();

rotas.get('/tarefas', todoList.listarTarefas);

rotas.get('/tarefas/:id', todoList.detalharTarefa);

rotas.post('/tarefas', todoList.criarTarefas);

rotas.put('/tarefas/:id', todoList.atualizarTarefa);

rotas.delete('/tarefas/:id', todoList.excluirTarefa);


module.exports = rotas;