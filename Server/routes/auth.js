const { Router } = require('express')
const { check } = require('express-validator')

const { checkJwt } = require('../controllers/auth')

const { getUser, newUser } = require('../controllers/login')
const { isExistUserEmail, isExistUserName } = require('../middleware/db-validator')
const { validateJwt } = require('../middleware/validate-jwt')
const { validatorField } = require('../middleware/validator-field')

const router = Router()

router.get('/',[
    validatorField
], checkJwt)
 

module.exports = router