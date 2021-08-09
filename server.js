const express = require('express');
const cors = require('cors');

require('./database')
const app = express();

//Arquivo de rotas
const userRouter = require('./rotas/pageRouters');
const apiRouter = require('./rotas/apiRouters');

//Express trabalhar com corpo em JSON
app.use(express.json());
//Express aceitar cors de qualquer remetente
app.options('*', cors());

// Carregamento do css 
app.use(express.static(__dirname + '/pages'));

//Carregamento de rotas
app.use('/', userRouter);
app.use('/api/', apiRouter);

//Dizer ao express a ViewEngine a ser utilizada
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Servidor ta funcionando');
})