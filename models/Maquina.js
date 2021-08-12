const { Model, DataTypes } = require('sequelize')

class Maquina extends Model {
    static init(sequelize) {
        super.init({
                grupo: {
                    type: DataTypes.STRING,
                    allowNull: false,


                },
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true

                }

            },

            {
                sequelize,
                modelName: 'maquina',
                paranoid: true
            })
    }
}

module.exports = Maquina;