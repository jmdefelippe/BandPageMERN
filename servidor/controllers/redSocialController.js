const RedSocial = require('../models/RedSocial');

/** Obtiene todos los socials */
exports.obtenerRedesSociales = async (req, res, next) => {
    try {
        const redesSociales = await RedSocial.find({});
        res.json(redesSociales);
    } catch (error) {
        console.log(error);
        next();
    }
}