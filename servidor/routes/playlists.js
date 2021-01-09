// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

// Obtiene todos los registros de los playlists en la BD
router.get('/',
    playlistController.obtenerPlaylists
);

module.exports = router;