const { Model, DataTypes, ENUM } = require('sequelize')

class Partida extends Model {
    static init(sequelize) {
        super.init({

            processo: {
                type: DataTypes.ENUM({
                    values: ['TINGIMENTO', 'LAVAGEM', 'REPROCESSO', 'LAVAGEM DE MÁQUINA']
                })

            },
            numeroPartida: {
                type: DataTypes.STRING,
                allowNull: true
            },
            fal: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            mes: {
                type: DataTypes.ENUM({
                    values: ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO', 'PROTÓTIPO', 'TESTE', 'OUTROS']
                })

            },
            cor: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            artigo: {
                type: DataTypes.STRING,
                allowNull: true
            },

            peso: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },




        }, {
            sequelize,
            modelName: 'partida',
            paranoid: true
        })
    }
}

module.exports = Partida;