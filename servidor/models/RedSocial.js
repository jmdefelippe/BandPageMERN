const mongoose = require('mongoose');

const RedSocialSchema = mongoose.Schema(
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
            maxLength: [200, '200 caracteres como máximo'],
            minLength: [1, '1 caracter como mínimo']
        }
    },
    {
        autoCreate: true,
        collection: 'redessociales'
    }
);

module.exports = mongoose.model('RedSocial', RedSocialSchema);