const Contacto = require('../models/Contacto');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require ('jsonwebtoken');

exports.crearContacto = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if ( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }

    // extraer email y password
    const { email } = req.body;

    try {
        // revisar que el contacto registrado sea unico
        let contacto = await Contacto.findOne({ email });

        if (contacto) {
            return res.status(400).json({ msg: 'El contacto ya existe' });
        }

        // crea el nuevo contacto
        contacto = new Contacto(req.body);

        // guardar contacto
        await contacto.save();
/*
        // crear y firmar el JWT
        const payload = {
            contacto: {
                id: contacto.id
            }
        };

        // firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // 1 hora
        }, (error, token) => {
            if (error) throw error;

            // mensaje de confirmación
            res.json({ token });

        });
*/
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}