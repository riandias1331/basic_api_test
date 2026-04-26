const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const authMiddleware = require('../middlewares/authMiddlewares'); // Importa aqui!

// Rota pública (qualquer um acessa)
router.post('/register', userController.registerUser);

// Rota PRIVADA (O middleware barra se não tiver token)
router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: "Seja bem-vindo à área logada!", userId: req.userId });
});

module.exports = router;