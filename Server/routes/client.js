const {Router} = require('express')
const { check } = require('express-validator')
const { getMyAnnouncement, addAnnouncement, editAccount, editAnnouncement } = require('../controllers/client')
const router = Router()

const { validateJwt } = require('../middleware/validate-jwt')
const { validatorField } = require('../middleware/validator-field')

router.get('/',[ 
    validateJwt,
    validatorField
], getMyAnnouncement)

router.post('/add',[   
    validateJwt,
    check('name', "Nombre obligatorio").not().isEmpty(),
    check('description', "Descripcion obligatorio").not().isEmpty(),
    check('category', "Categoria obligatorio").not().isEmpty(),
    check('contact', "Contacto obligatorio").not().isEmpty(),
    check('price', "Precio obligatorio").not().isEmpty(),
    validatorField
], addAnnouncement)

router.post('/edit',[   
    validateJwt,
    check('name', "Nombre obligatorio").not().isEmpty(),
    check('description', "Descripcion obligatorio").not().isEmpty(),
    check('category', "Categoria obligatorio").not().isEmpty(),
    check('contact', "Contacto obligatorio").not().isEmpty(),
    check('price', "Precio obligatorio").not().isEmpty(),
    validatorField
], editAnnouncement)

router.post('/editAccount',[   
    validateJwt,
    check('name', "Nombre obligatorio").not().isEmpty(),
    validatorField
], editAccount)
 
module.exports = router