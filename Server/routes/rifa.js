const { Router } = require('express')
const { check } = require('express-validator') 
const { getGive, getIntegrantsAvailable } = require('../controllers/rifa')
const router = Router()

const { validateJwt } = require('../middleware/validate-jwt')
const { validatorField } = require('../middleware/validator-field')

router.post('/',[ 
    validatorField,
    check('name', "Nombre obligatorio").not().isEmpty(),
], getGive)
router.get('/', [
    validatorField
], getIntegrantsAvailable)
module.exports = router