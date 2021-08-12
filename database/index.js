const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//MODELOS
const Admin = require('../models/Admin')
const Professor = require('../models/Prof')
const Permissao = require('../models/Permission')
const Usuario = require('../models/Usuario')
const Maquina = require('../models/Maquina')

//INICIALIZACAO DOS MODELOS
Maquina.init(connection)
Admin.init(connection)
Usuario.init(connection)
Permissao.init(connection)
Professor.init(connection)

//RELACIOANAMENTOS

//ID de Permissao Vai Para Usuario
// Permissao.hasMany(Admin);
// Admin.belongsTo(Permissao);

Permissao.hasMany(Usuario);
Usuario.belongsTo(Permissao);

//SYNC MODELOS

Maquina.sync()
Professor.sync()
Permissao.sync()
Admin.sync()
Usuario.sync()


module.exports = connection;