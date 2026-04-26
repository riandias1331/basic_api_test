const express = require('express');
const cors = require('cors');
const path = require('path'); // Importante para os caminhos
const userRoutes = require('./routes/userRoutes');

const app = express();

// CONFIGURAÇÃO DO EJS (O que faltava)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Caso queira usar CSS/Imagens

// Rotas
app.use('/api/users', userRoutes);

// Rota para renderizar a página inicial (EJS)
app.get('/', (req, res) => {
    res.render('index', { title: 'Mert Backend API', status: 'Online' });
});

module.exports = app;