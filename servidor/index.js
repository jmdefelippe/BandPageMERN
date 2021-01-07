const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const integrantes = require('./routes/integrantes');
const albumes = require('./routes/albumes');
const videos = require('./routes/videos');
const galerias = require('./routes/galerias');
const fotos = require('./routes/fotos');
const biografia = require('./routes/biografia');

// crear el servidor
const app = express();

// conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const port = process.env.port || 4000;

// importar rutas
app.use('/api/integrantes', integrantes);
app.use('/api/albumes', albumes);
app.use('/api/videos', videos);
app.use('/api/galerias', galerias);
app.use('/api/fotos', fotos);
app.use('/api/biografia', biografia);

// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});



