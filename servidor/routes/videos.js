// rutas para crear albumes
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const { check } = require('express-validator');

// Obtiene todos los registros de los videos en la BD
router.get('/',
    videoController.obtenerVideos
);

module.exports = router;