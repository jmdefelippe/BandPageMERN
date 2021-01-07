const Galeria = require('../models/Galeria');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken');

/** Obtiene todas las galerias */
exports.obtenerGalerias = async (req, res, next) => {
    try {
        const galerias = await Galeria.find({});
        res.json(galerias);
    } catch (error) {
        console.log(error);
        next();
    }
}