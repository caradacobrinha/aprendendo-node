const { Router } = require('express')
const express = require('express')
const path = require('path')
const route = express.Router()

const questionController = require('./controllers/question-controller')
const roomController = require('./controllers/room-controller')

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))  // recebe a rota '/' e renderiza o index com a variavel enter room
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-psswd'}))

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enterroom', roomController.enter) //post pq está enviando as informções do fomulario (roomId)

route.post('/question/create/:room', questionController.create)
route.post('/question/:room/:question/:action', questionController.index) // os dois ponto informa o express que o conteudo vai vir em forma de URL

module.exports = route /* exporta o route para o server.js poder ler */