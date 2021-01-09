// rutas para crear redesSociales
const express = require('express');
const router = express.Router();
const redSocialController = require('../controllers/redSocialController');

// Obtiene todos los registros de las redesSociales en la BD
router.get('/',
    redSocialController.obtenerRedesSociales
);

module.exports = router;