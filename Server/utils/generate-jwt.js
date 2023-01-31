const jwt = require('jsonwebtoken')

const generateJwt = (id, name) => {
    return new Promise((resolve, reject) => {
        const payload = { id, name }
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '1d'
        }, (err, token) => {
            if (err) {
                console.log("hola")
                reject("No se pudo generar el token")
            }
            else {
                resolve(token)
            }
        })
    })
}

module.exports = {
    generateJwt
}