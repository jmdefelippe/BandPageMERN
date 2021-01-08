// rutas para crear albumes
const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

// Obtiene todos los registros de los albumes en la BD
router.get('/',
    albumController.obtenerAlbumes
);

module.exports = router;