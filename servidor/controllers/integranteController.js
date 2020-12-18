const Integrante = require('../models/Integrante');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken');

exports.crearIntegrante = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extraer nombre
    const { nombre } = req.body;

    try {
        // revisar que el integrante registrado sea unico
        let integrante = await Usuario.findOne({ nombre });

        if (integrante) {
            return res.status(400).json({ msg: 'El integrante ya existe' });
        }

        // crea el nuevo integrante
        integrante = new Integrante(req.body);

        // guardar integrante
        await integrante.save();

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}

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