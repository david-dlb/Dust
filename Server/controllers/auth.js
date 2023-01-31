const jwt = require("jsonwebtoken")

const { sequelize } = require('../DB/connection')
const { Account } = require('../DB/account')

const checkJwt = (req, res) => { 
    const token = req.header('token') 

    if (!token) {

        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }
    
    try {
        const { id, name } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        //console.log(name)
        res.json({
            name
        })
    } catch (error) { 
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

const isValidUser = (req, res) => {
    const { id } = req.params
    
    const valid = isValidIdDB(id, req.uid)
    if(!valid){
        res.status(401).json({
            msg: "Usuario no tiene permisos"
        })
    }
    res.json({
        valid
    })
}


module.exports = {
    checkJwt,
    isValidUser
}