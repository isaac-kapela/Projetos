const express  = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


//DB CONEXÃO

const conn = require('./db/conn');

conn();

//rotas
const routes = require('./routes/router');
app.use("/api", routes);

app.listen(3000, function() {    
    console.log('Servidor online!!');
});