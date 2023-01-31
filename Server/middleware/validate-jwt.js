const jwt = require('jsonwebtoken')

const validateJwt = (req, res, next) => { 
    const token = req.header('token')
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
        console.log(id)
        req.uid = id 

        next()
    } catch (error) {
        //console.log(error)
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = {
    validateJwt
}