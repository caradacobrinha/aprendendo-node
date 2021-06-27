/* imports bibliotecas */
const express = require('express')
const path = require('path')
const { toUnicode } = require('punycode')
/* imports scripts */
const route = require('./route')

const server = express() /* executa o server  */

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views')) /*o join vai juntar o __dirname com views. __dirname pega o nome do diretorio atual (.pasta_raiz/src) */

server.use(express.static("public/")) /* indica o diretorio dos conteudos estaticos do projeto (imagens, stilos, etc) */

server.use(express.urlencoded({extended: true})) //config do middleware  

server.use(route) /* pega as rotas no arquivo route.js */
server.listen(3000, on_ready()) /* inicia o listen na porta 3000 e dispara o on_ready() */

function on_ready(){
    console.log('Rodando o servidor')
}


