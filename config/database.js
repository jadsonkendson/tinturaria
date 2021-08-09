//ARQUIVO DE CONFIGURACAO PARA O DB
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'tinturaria',
    define: {
        timestamps: true,
        underscored: true
    }
}