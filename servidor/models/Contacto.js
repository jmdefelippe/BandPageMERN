const mongoose = require('mongoose');

const ContactoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        trim: true,
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    email: {
        type: String,
        required: [true, 'Este valor es necesario!'],
        trim: true,
        unique: true,
        maxLength: [100, '100 caracteres como máximo'],
        minLength: [1, '1 caracter como mínimo']
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Contacto', ContactoSchema);