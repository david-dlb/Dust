const {Router} = require('express')
const { check } = require('express-validator')
const router = Router()

const { getAllClients, getClientInformation, editClient, addClient } = require('../controllers/admin')
const { validateJwt } = require('../middleware/validate-jwt')
const { validatorField } = require('../middleware/validator-field')

router.get('/',[ 
    validateJwt,
    validatorField
], getAllClients)

router.get('/information/:id',[ 
    validateJwt,
    check('id', "Nesesario Id del anuncio").not().isEmpty(),
    validatorField
], getClientInformation)

router.post('/add',[ 
    validateJwt,
    check('name', "Nesesario nombre").not().isEmpty(),
    check('email', "Nesesario email").not().isEmpty(),
    check('password', "Nesesario contrasena").not().isEmpty(),
    validatorField
], addClient)

router.post('/edit',[ 
    validateJwt,
    check('name', "Nesesario nombre").not().isEmpty(),
    check('status', "Nesesario status").not().isEmpty(), 
    validatorField
], editClient)
 
module.exports = router