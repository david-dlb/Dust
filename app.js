require('dotenv').config()

const Server = require('./Server/models/server.js')

const server = new Server()
server.listen()