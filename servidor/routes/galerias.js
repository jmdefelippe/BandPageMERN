// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const galeriaController = require('../controllers/galeriaController');
const { check } = require('express-validator');

// Obtiene todos los registros de las galerias en la BD
router.get('/',
    galeriaController.obtenerGalerias
);

module.exports = router;