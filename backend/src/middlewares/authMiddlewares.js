const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // 1. Pega o token que vem no cabeçalho 'Authorization'
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido. Acesso negado!' });
    }

    // O formato padrão é "Bearer TOKEN_AQUI", então dividimos a string
    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Erro no formato do token!' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'Token malformado!' });
    }

    // 2. Verifica se o token é válido usando sua chave secreta do .env
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido ou expirado!' });
        }

        // 3. Se estiver tudo OK, salva o ID do usuário na requisição para uso futuro
        req.userId = decoded.id;
        
        // 4. Libera para o próximo passo (Controller)
        return next();
    });
};

module.exports = authMiddleware;