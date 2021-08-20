const Sequelize = require('sequelize');
const Permissao = require('../models/Permission');
const MaqTint = require('../models/MaqTint')

module.exports = {

    async getAll(req, res) {
        const maqtints = await MaqTint.findAll();
        res.json(maqtints)
    },

    async getById(req, res) {
        const maqtint = await MaqTint.findByPk(req.params.id)
        res.json(maqtint)
    }

}