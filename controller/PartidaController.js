const Sequelize = require('sequelize');
const Permissao = require('../models/Permission');
const Partida = require('../models/Partida')

module.exports = {

    async getAll(req, res) {
        const partidas = await Patida.findAll()
        res.json(partidas)
    },

    async getById(req, res) {
        const partida = await Partida.findByPk(req.params.id)
        res.json(partida)
    }


}