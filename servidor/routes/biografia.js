// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const biografiaController = require('../controllers/biografiaController');

// Obtiene todos los registros de la biografia en la BD
router.get('/',
    biografiaController.obtenerBiografia
);

module.exports = router;