const express = require('express');
const cors = require('cors');
const { sequelize } = require('../DB/connection')
const { Account } = require('../DB/account')

class Server {
    constructor() {
        this.app = express()
        this.app.use(express.static('public'))
         
        this.port = 8080

        this.dbConnnection()
        this.middleWare()
        this.routes()
    }

    async dbConnnection() {
        try {
            await sequelize.authenticate()
            await sequelize.sync() 

            // const account = new Account({
            //     name: "david",
            //     password: "hola"
            // })
            // account.save()

            // const acc = await Account.findAll()
        } catch (error) {
            console.log(error)
        }
        
    }

    middleWare() {
        this.app.use(express.json()) 
        this.app.use(cors())
    }

    routes() { 
        this.app.use('/api/admin', require('../routes/admin')) 
        this.app.use('/api/client', require('../routes/client')) 
        this.app.use('/api/user', require('../routes/user')) 
        this.app.use('/api/login', require('../routes/login')) 
        this.app.use('/api/auth', require('../routes/auth'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on the port ` + this.port);
        });
    }
}

module.exports = Server