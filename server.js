const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();

// Sirve los archivos estáticos de la aplicación React
app.use(express.static(path.join(__dirname, 'build')));

// Configura el proxy para las llamadas a la API de Notion
app.use('/api', createProxyMiddleware({
    target: 'https://api.notion.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/v1', // rewrite path
    },
}));

// Maneja cualquier otra solicitud enviando el index.html
app.get('*', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    console.log('Solicitud recibida:', req.originalUrl);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
