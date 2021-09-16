const express = require('express');
const mongoose = require('mongoose');

//Conectarnos a la BD
mongoose.connect('mongodb://localhost:27017/demo')
    .then(()=>console.log('Conectado a MongoDB...'))
    .catch(err => console.log('No se pudo conectar con MongoDB..',err));

const app = express();

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log('Api RESTFul Ok, y ejecutándose');
})
