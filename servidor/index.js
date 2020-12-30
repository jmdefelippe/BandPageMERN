const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

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
//app.use('/api/usuarios', require('./routes/usuarios'));
//app.use('/api/auth', require('./routes/auth'));
//app.use('/api/proyectos', require('./routes/proyectos'));
//app.use('/api/tareas', require('./routes/tareas'));
app.use('/api/integrantes', require('./routes/integrantes'));
app.use('/api/albumes', require('./routes/albumes'));
app.use('/api/videos', require('./routes/videos'));

// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});



