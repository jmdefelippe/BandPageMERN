const mongoose = require('mongoose');

const PlaylistSchema = mongoose.Schema(
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
            maxLength: [200, '200 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        },
        videos: [
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
                link: {
                    type: String,
                    required: [true, 'Este valor es necesario!'],
                    maxLength: [200, '100 caracteres como máximo'],
                    minLength: [1, '1 caracter como mínimo']
                }
            }
        ]
    },
    {
        autoCreate: true,
        collection: 'playlists'
    }
);

module.exports = mongoose.model('Playlist', PlaylistSchema);