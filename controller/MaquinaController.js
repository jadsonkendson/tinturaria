const Sequelize = require('sequelize');
const Permissao = require('../models/Permission');
const Maquina = require('../models/Maquina')

module.exports = {

    async getAll(req, res) {
        const maquinas = await Maquina.findAll();
        res.json(maquinas)
    },

    async getById(req, res) {
        const maquina = await Maquina.findByPk(req.params.id)
        res.json(maquina)
    }

}