const jwt = require("jsonwebtoken")

const { sequelize } = require('../DB/connection')
const { Account } = require('../DB/account')

const checkJwt = (req, res) => { 
    const token = req.header('token') 

    if (!token) {

        return res.json({
            status: "401",
            msg: 'No hay token en la peticion'
        })
    }
    
    try {
        const { id, name } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        //console.log(name)
        res.json({
            status: "200",
            bag: name
        })
    } catch (error) { 
        res.json({
            status: "401",
            msg: 'Token no valido'
        })
    }
}



module.exports = {
    checkJwt
}