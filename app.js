// app.js
const express = require('express');
const path = require('path');
const app = express();

// Sirve archivos estáticos (CSS, imágenes)
app.use(express.static(__dirname));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rutas para las teorías
app.get('/iluminatis', (req, res) => {
    res.sendFile(path.join(__dirname, 'iluminatis.html'));
});

app.get('/microchips', (req, res) => {
    res.sendFile(path.join(__dirname, 'microchips.html'));
});

app.get('/mutaciones', (req, res) => {
    res.sendFile(path.join(__dirname, 'mutaciones.html'));
});

app.get('/area51', (req, res) => {
    res.sendFile(path.join(__dirname, 'area51.html'));
});

app.get('/911', (req, res) => {
    res.sendFile(path.join(__dirname, '911.html'));
});

app.get('/terraplanismo', (req, res) => {
    res.sendFile(path.join(__dirname, 'terraplanismo.html'));
});

// Configuración del puerto
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
