const Album = require('../models/Album');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken');

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