const Biografia = require('../models/Biografia');

/** Obtiene la biografía */
exports.obtenerBiografia = async (req, res, next) => {
    try {
        const biografia = await Biografia.find({});
        res.json(biografia);
    } catch (error) {
        console.log(error);
        next();
    }
}