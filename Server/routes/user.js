const { Router } = require('express')
const { check } = require('express-validator') 
const { getAllAnnouncement } = require('../controllers/user')
const router = Router()

const { validateJwt } = require('../middleware/validate-jwt')
const { validatorField } = require('../middleware/validator-field')

router.get('/',[ 
    validatorField
], getAllAnnouncement)
 
module.exports = router