var express = require('express');

// const ProfessorController = require('../controller/ProfessorController');
// const AdminController = require('../controller/AdminController');
const UsuarioController = require('../controller/UsuarioController');
const MaquinaController = require('../controller/MaquinaController');

//Carregar routers do Express
var router = express.Router();

//ROTAS API USUARIO
router.get('/usuarios', UsuarioController.getAll);
router.get('/usuario/:id', UsuarioController.getById);
router.post('/login', UsuarioController.login);
router.post('/cadastro', UsuarioController.register);

//ROTAS API MAQUINA
router.get('/maquina', MaquinaController.getAll);


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