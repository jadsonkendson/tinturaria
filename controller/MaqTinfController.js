const Sequelize = require('sequelize');
const Permissao = require('../models/Permission');
const MaqTinf = require('../models/MaqTinf')

module.exports = {

    async getAll(req, res) {
        const maqtinfs = await MaqFio.findAll();
        res.json(maqtinfs)
    },

    async getById(req, res) {
        const maqtinf = await MaqFio.findByPk(req.params.id)
        res.json(maqtinf)
    }

}