const mongoose = require('mongoose');

const IntegranteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    rol: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    imagen: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    fechaNacimiento: {
        type: Date,
        default: Date.now()
    },
    biografia: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        trim: true
    }
});

module.exports = mongoose.model('Integrante', IntegranteSchema);