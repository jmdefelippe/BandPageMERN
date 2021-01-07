const Integrante = require('../models/Integrante');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken');

/** Obtiene todos los integrantes */
exports.obtenerIntegrantes = async (req, res, next) => {
    try {
        const integrantes = await Integrante.find({});
        res.json(integrantes);
    } catch (error) {
        console.log(error);
        next();
    }
}