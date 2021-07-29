const api = require('../config/default');

const usuarioController = {
    buscarCep: (req, res) => {
        const {
            cep
        } = req.params;

        if (cep.length !== 8) {
            return res.status(401).send('CEP Inválido');
        };

        api.get(`/ws/${cep}/json/`).then((response) => {
            if (response.data.erro !== undefined) {
                return res.status(400).send('Erro ao consultar CEP')
            }
            return res.json(response.data);
        }).catch((err) => {
            if (err) {
                return res.status(400).json({
                    messagem: 'Erro'
                })
                console.log(err);
            };
        });
    }
}

module.exports = usuarioController;