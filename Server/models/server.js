const express = require('express');
const cors = require('cors');
const { sequelize } = require('../DB/connection')
const { integrants } = require('../DB/integrants');
const { give } = require('../DB/give');

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

            // const p = new integrants({
            //     name: "Flaqui"
            // })
            // const p1 = new integrants({
            //     name: "Dayanys"
            // })
            // const p2 = new integrants({
            //     name: "Beyonce"
            // })
            // const p3 = new integrants({
            //     name: "Barby"
            // })
            // const p4 = new integrants({
            //     name: "Amandita"
            // })
            // const p5 = new integrants({
            //     name: "David"
            // })
            // const p6 = new integrants({
            //     name: "Alfredo"
            // })
            // const p7 = new integrants({
            //     name: "Nelsi"
            // })
            // const p8 = new integrants({
            //     name: "chistofer"
            // })
            // p.save()
            // p1.save()
            // p2.save()
            // p3.save()
            // p4.save()
            // p5.save()
            // p6.save()
            // p7.save()
            // p8.save()
            // console.log(await integrants.findAll())
            // const acc = await Account.findAll()
            // const s = await give.findAll()
            // await give.drop()
            // console.log(await integrants.findAll())
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
        this.app.use('/api/rifa', require('../routes/rifa'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on the port ` + this.port);
        });
    }
}

module.exports = Server