exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Aqui você usaria o model para salvar no banco
        res.status(201).json({ message: `Usuário ${name} criado!` });
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
};