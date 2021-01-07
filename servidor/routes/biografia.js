// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const biografiaController = require('../controllers/biografiaController');
const { check } = require('express-validator');

// Obtiene todos los registros de los integrantes en la BD
router.get('/',
    biografiaController.obtenerBiografia
);

module.exports = router;