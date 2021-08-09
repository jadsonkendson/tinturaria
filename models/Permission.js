const {Model, DataTypes} = require('sequelize')

class Permissao extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cod:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
           sequelize,
           modelName: 'permissao',
           paranoid: true
        })
    }
}

module.exports = Permissao;

