const Sequelize = require('sequelize');
const Permissao = require('../models/Permission');
const Usuario = require('../models/Usuario')

module.exports = {

    async getAll(req, res) {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    },

    async getById(req, res) {
        const usuario = await Usuario.findByPk(req.params.id)
        res.json(usuario)
    },

    async login(req, res) {
        try {
            const { matricula, senha } = req.body
            const usuarioLogin = await Usuario.findOne({
                where: {
                    usuario: matricula
                }
            })

            if (usuarioLogin.senha == senha) {
                res.json(usuarioLogin)
            } else {
                res.status(401).json({ error: 'Falha de permissao ou / senha' })
            }
        } catch (error) {
            res.status(400).json({ error: 'Falha de permissao ou / senha', message: error.message })
        }
    },

    async register(req, res) {

        try {
            const { setor, nome, matricula, senha } = req.body
            const usuarioCriado = await Usuario.create({ setor, nome, matricula, senha })

            if (usuarioCriado) {
                res.status(201).json({ usuario: usuarioCriado, created: true });
            }
        } catch (error) {
            res.status(400).json(error)
        }

    }

}