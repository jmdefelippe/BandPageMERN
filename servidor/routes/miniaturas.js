const express = require('express');
const router = express.Router();
const miniaturaController = require('../controllers/miniaturaController');

// Obtiene todos los registros de las miniaturas en la BD
router.get('/',
    miniaturaController.obtenerMiniaturas
);

module.exports = router;