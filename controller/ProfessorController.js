const Sequelize = require('sequelize');
const Professor = require('../models/Prof')

module.exports = {

    async getAll(req, res){
        const professores = await Professor.findAll();
        res.json(professores)
    },

    async getById(req, res) {
        const professor = await Professor.findByPk(req.params.id)
        res.json(professor)
    },

    async register(req, res){

        try {
            const { nome, matricula, telefone } = req.body
            const professorCriado = await Professor.create({nome, matricula, telefone})
            
            if (professorCriado) {
                res.status(201).json({prof: professorCriado, created: true});
            }
        } catch (error) {
            res.status(400).json(error)
        }

    }

}