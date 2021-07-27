const express = require("express");
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.get("/livros", indexController.index);

router.get("/livros", indexController.create);


module.exports = router;