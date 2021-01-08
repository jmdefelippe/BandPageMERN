// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const fotoController = require('../controllers/fotoController');

// Obtiene todos los registros de los fotos en la BD
router.get('/',
    fotoController.obtenerFotos
);

module.exports = router;