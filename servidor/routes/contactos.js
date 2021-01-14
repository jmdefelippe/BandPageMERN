// rutas para crear contactos
const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');
const { check } = require('express-validator');

// crea un contacto
// api/contactos
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Agrega un email válido').isEmail(),
    ],
    contactoController.crearContacto
);

module.exports = router;