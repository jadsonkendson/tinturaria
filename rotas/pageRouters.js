var express = require('express');
var router = express.Router();

router.get('/inserir', (req, res) => {
    res.render('../pages/inserir')
})

router.get('/login', (req, res) => {
    res.render('../pages/login')
})

router.get('/cadastro', (req, res) => {
    res.render('../pages/cadastro')
})


module.exports = router;