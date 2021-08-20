const { Model, DataTypes } = require('sequelize')

class MaqTinf extends Model {
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
                modelName: 'maquinastinf',
                paranoid: true
            })
    }
}

module.exports = MaqTinf;