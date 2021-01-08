const mongoose = require('mongoose');

const FotoSchema = mongoose.Schema({
        imagen: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        galeriaTitulo: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        galeria: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Galeria'
        }
    },
    {
        autoCreate: true,
        collection: 'fotos'
    }
);

module.exports = mongoose.model('Foto', FotoSchema);