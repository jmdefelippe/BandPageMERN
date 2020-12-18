const mongoose = require('mongoose');

const IntegranteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    rol: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        trim: true
    },
    fechaNacimiento: {
        type: Date,
        default: Date.now()
    },
    biografia: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Integrante', IntegranteSchema);