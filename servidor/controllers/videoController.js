const Video = require('../models/Video');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken');

/** Obtiene todos los videos */
exports.obtenerVideos = async (req, res, next) => {
    try {
        const videos = await Video.find({});
        res.json(videos);
    } catch (error) {
        console.log(error);
        next();
    }
}