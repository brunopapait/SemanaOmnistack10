const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://brunopapait:57a8tycd@cluster0-iy25z.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
app.use(express.json());
app.use(routes);
app.listen(3333);

/*METODOS HTTP
get = pegar alguma informacao ao servidor
post = enviar, salvar alguma informacao ao servidor
put = editar alguma informacao no servidor
delete = deletar alguma informacao do servidor
*/

/*
*Query params: req.query (Filtros, ordenacao, paginacao)
*Route params: req.params (Identificar um recurso na alteracao ou remocao)
*Body: req.body (Ddados para a criacao ou alteracao de um registro)
*/