// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const integranteController = require('../controllers/integranteController');
const { check } = require('express-validator');

// Obtiene todos los registros de los integrantes en la BD
router.get('/',
    integranteController.obtenerIntegrantes
);

module.exports = router;