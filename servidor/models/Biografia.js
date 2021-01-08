const mongoose = require('mongoose');

const BiografiaSchema = mongoose.Schema(
    {
        destacado: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            //maxLength: [1000, '100 caracteres como máximo'],
            //minLength: [1, '1 caracter como mínimo']
        },
        detalle: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            //maxLength: [1000, '100 caracteres como máximo'],
            //minLength: [1, '1 caracter como mínimo']
        },
        imagen: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        }
    },
    {
        autoCreate: true,
        collection: 'biografia'
    }
);

module.exports = mongoose.model('Biografia', BiografiaSchema);