const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema(
    {
        titulo: {
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
            maxLength: [200, '200 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        }
    },
    {
        autoCreate: true,
        collection: 'videos'
    }
);

module.exports = mongoose.model('Video', VideoSchema);