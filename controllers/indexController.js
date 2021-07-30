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

    mostrarLivro: async (req, res) => {
        let {
            id
        } = req.params
        const mostrarLivro = await Livros.findByPk(id)
        res.json(mostrarLivro)
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
        if (atualizarLivro) {
            const livroAtualizado = await Livros.findByPk(id)

            res.json(livroAtualizado)
        }

        res.status(401).send("erro na atualização do livro")
    }

}

module.exports = indexController