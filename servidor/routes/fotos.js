// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const fotoController = require('../controllers/fotoController');
const { check } = require('express-validator');

// Obtiene todos los registros de los fotos en la BD
router.get('/',
    fotoController.obtenerFotos
);

module.exports = router;