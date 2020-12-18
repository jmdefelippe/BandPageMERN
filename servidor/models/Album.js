const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema(
    {
        artista: {
            type: String,
            required: [true, 'Este valor es necesario!'],
            trim: true,
            maxLength: [100, '100 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
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
        anio: {
            type: Number,
            required: [true, 'Este valor es necesario!']
        },
        canciones: [
            {
                numero: {
                    type: Number,
                    required: [true, 'Este valor es necesario!']
                }, 
                titulo: {
                    type: String,
                    required: [true, 'Este valor es necesario!'],
                    maxLength: [100, '100 caracteres como máximo'],
                    minLength: [1, '1 caracter como mínimo']
                },
                duracion: {
                    type: String,
                    required: [true, 'Este valor es necesario!'],
                    maxLength: [10, '100 caracteres como máximo'],
                    minLength: [1, '1 caracter como mínimo']
                }
            }
        ]
    },
    {
        autoCreate: true,
        collection: 'albumes'
    }
);

module.exports = mongoose.model('Album', AlbumSchema);