const { Model, DataTypes } = require('sequelize')

class MaqTint extends Model {
    static init(sequelize) {
        super.init({
                grupo: {
                    type: DataTypes.STRING(20),
                    allowNull: false,


                },
                nome: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                    unique: true
                },

                setor: {
                    type: DataTypes.STRING(20),
                    allowNull: false,

                }

            },

            {
                sequelize,
                modelName: 'maquinastint',
                paranoid: true
            })
    }
}

module.exports = MaqTint;