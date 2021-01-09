const Miniatura = require('../models/Miniatura');

/** Obtiene todas las miniaturas */
exports.obtenerMiniaturas = async (req, res, next) => {
    try {
        const miniaturas = await Miniatura.find({});
        res.json(miniaturas);
    } catch (error) {
        console.log(error);
        next();
    }
}