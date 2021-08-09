const { Model, DataTypes } = require('sequelize')

class Usuario extends Model {
    static init(sequelize) {
        super.init({
                setor: {
                    type: DataTypes.STRING,
                    allowNull: false

                },
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },

                matricula: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    unique: true

                },
                senha: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },

            {
                sequelize,
                modelName: 'usuario',
                paranoid: true
            })
    }
}

module.exports = Usuario;