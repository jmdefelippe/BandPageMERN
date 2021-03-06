const mongoose = require('mongoose');

const MiniaturaSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        imagen: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        link: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        album: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
    },
    {
        autoCreate: true,
        collection: 'miniaturas'
    }
);

module.exports = mongoose.model('Miniatura', MiniaturaSchema);