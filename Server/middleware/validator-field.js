const { validationResult } = require("express-validator")

// comprueba que los check de express-validator no hayan dado error si es asi devuelve una respuesta de error
const validatorField = (req, res, next) => {
    const errors = validationResult(req)
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    
    next()
}

module.exports = {
    validatorField
}