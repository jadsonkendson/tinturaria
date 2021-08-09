const {Model, DataTypes} = require('sequelize')

class Professor extends Model {
    static init(sequelize) {
        super.init({
            nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            matricula: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }

        },
        {
           sequelize,
           modelName: 'professor',
           paranoid: true
        })
    }
}

module.exports = Professor;

