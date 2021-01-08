const Foto = require('../models/Foto');
const Galeria = require('../models/Galeria');

// obtiene las fotos por galeria
exports.obtenerFotos = async (req, res) => {
    try {
        // extraer la galeria y comprobar si existe
        const { galeria } = req.query;

        const existeGaleria = await Galeria.findById(galeria);
        if(!existeGaleria) {
            return res.status(404).json({ msg: 'Galeria no encontrada' })
        }

        // obtener las fotos por galeria
        const fotos = await Foto.find({ galeria });
        res.json({ fotos });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}