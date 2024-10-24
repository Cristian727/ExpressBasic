const express = require('express');
const app = express();
const path =  require("path")

app.use(express.static(path.join(__dirname, 'public')));

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});