var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

var mensagemController = require('./js/postagem.js');

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/postagem'));

// libera acesso à API de qualquer host/cliente
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// inicializa o servidor na porta especificada
app.listen(3000,'0.0.0.0', function() {
  console.log('Acesse o servidor http://localhost:3000');
});

// Endpoints
app.get('/historico', postagemController.listar);
app.post('/historico', postagemController.criar);
