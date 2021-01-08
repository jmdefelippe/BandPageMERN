const Album = require('../models/Album');

/** Obtiene todos los albumes */
exports.obtenerAlbumes = async (req, res, next) => {
    try {
        const albumes = await Album.find({});
        res.json(albumes);
    } catch (error) {
        console.log(error);
        next();
    }
}