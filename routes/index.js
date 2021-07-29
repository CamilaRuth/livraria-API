const express = require("express");
const router = express.Router();
const indexController = require('../controllers/indexController');
const usuarioController = require('../controllers/usuarioController')

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.get("/livros", indexController.index);

router.post("/livros/novo", indexController.create);

router.put('/livros/mostrar/:id', indexController.mostrarLivro);

router.put('/livros/atualizar/:id', indexController.atualizarLivro);

router.get('/usuario/buscar/:cep', usuarioController.buscarCep);


module.exports = router;