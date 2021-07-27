//const Sequelize = require('sequelize');
const {
    Livros
} = require('../models/')
const indexController = {
    index: async (req, res) => {
        let livros = await Livros.findAll()
        res.json(livros)
    },

    create: async (req, res) => {
        let {
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        } = req.body
        const livro = await Livros.create({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        })
        res.json(livro)
    },

    editarLivro: async (req, res) => {
        let {
            id
        } = req.params
        const editarLivro = await Livros.findByPk(id)
        res.json(editarLivro)
    },

    atualizarLivro: async (req, res) => {
        let {
            id
        } = req.params
        let {
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        } = req.body
        const atualizarLivro = await Livros.update({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        }, {
            where: {
                id
            }
        })
        res.json(atualizarLivro)

    }

}

module.exports = indexController