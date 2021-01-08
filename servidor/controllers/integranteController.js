const Integrante = require('../models/Integrante');

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