var express = require('express');
var cors = require('cors');
var app = express();
const mongoose = require('mongoose');
const Resource = require('resourcejs');

var UserModel = require('./src/Models/UserModel')
var Users = require('./src/Controllers/UserMethods')

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

//#region Area de metodos

app.use('/User', Users)

//#endregion

//#region  AREA DE BASE DE DATOS DE MONGO

mongoose
    .connect("mongodb+srv://jmunoz:!QAZxsw2@testseleccion.0jfdxzz.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

Resource(app, '', 'users', UserModel).rest();

//#endregion

//#region AREA DE INICIALIZACION DE PUERTOS

const securePort = process.env.PORT || '6000';
app.listen(securePort, () => {
    console.log(`La api está escuchando en el puerto ${securePort}`);
})

module.exports = app;

//#endregion