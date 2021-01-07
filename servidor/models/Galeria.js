const mongoose = require('mongoose');

const GaleriaSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        descripcion: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [1000, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
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
        collection: 'galerias'
    }
);

module.exports = mongoose.model('Galeria', GaleriaSchema);