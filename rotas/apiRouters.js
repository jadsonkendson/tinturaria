var express = require('express');

// const ProfessorController = require('../controller/ProfessorController');
// const AdminController = require('../controller/AdminController');
const UsuarioController = require('../controller/UsuarioController');
const MaqTintController = require('../controller/MaqTintController');
const MaqTinfController = require('../controller/MaqTinfController');

//Carregar routers do Express
var router = express.Router();

//ROTAS API USUARIO
router.get('/usuarios', UsuarioController.getAll);
router.get('/usuario/:id', UsuarioController.getById);
router.post('/login', UsuarioController.login);
router.post('/cadastro', UsuarioController.register);

//ROTAS API MAQUINA TINGIMENTO DE MALHA
router.get('/maqtint', MaqTintController.getAll);

//ROTAS API MAQUINA TINGIMENTO DE FIO
router.get('/maqtinf', MaqTinfController.getAll);


//ROTAS API ADMIN
// router.get('/admins', AdminController.getAll);
// router.get('/admin/:id', AdminController.getById);
// router.post('/login', AdminController.login);
// router.post('/cadastro', AdminController.register);


//ROTAS API PROFESSOR
// router.get('/professor', ProfessorController.getAll)
// router.get('/professor/:id', ProfessorController.getById)
// router.post('/professor', ProfessorController.register)

module.exports = router;