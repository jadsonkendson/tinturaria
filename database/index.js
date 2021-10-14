const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

//MODELOS
const Admin = require('../models/Admin')
const Professor = require('../models/Prof')
const Permissao = require('../models/Permission')
const Usuario = require('../models/Usuario')
const MaqTint = require('../models/MaqTint');
const MaqTinf = require('../models/MaqTinf');
const Partida = require('../models/Partida');

//INICIALIZACAO DOS MODELOS
MaqTint.init(connection)
MaqTinf.init(connection)
Admin.init(connection)
Usuario.init(connection)
Partida.init(connection)
Permissao.init(connection)
Professor.init(connection)


//RELACIOANAMENTOS

//ID de Permissao Vai Para Usuario
// Permissao.hasMany(Admin);
// Admin.belongsTo(Permissao);

Permissao.hasMany(Usuario);
Usuario.belongsTo(Permissao);

//SYNC MODELOS

MaqTint.sync()
MaqTinf.sync()
Admin.sync()
Usuario.sync()
Partida.sync()


Professor.sync()
Permissao.sync()


module.exports = connection;