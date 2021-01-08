const Galeria = require('../models/Galeria');

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