const { Model, DataTypes } = require('sequelize')

class Admin extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            usuario: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }

        }, {
            sequelize,
            modelName: 'admin',
            paranoid: true
        })
    }
}

module.exports = Admin;