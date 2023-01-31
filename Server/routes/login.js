const {Router} = require('express')
const { check } = require('express-validator') 
const { getUser } = require('../controllers/login')
const router = Router()

const { validateJwt } = require('../middleware/validate-jwt')
const { validatorField } = require('../middleware/validator-field')

router.post('/',[ 
    check('name', "Nombre obligatorio").not().isEmpty(),
    check('password', 'Contraseña obligatoria').not().isEmpty(),
    validatorField
], getUser)
 
module.exports = router