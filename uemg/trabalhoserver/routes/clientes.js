var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aulas_uemg', {useNewUrlParser: true});

const clienteSchema = new mongoose.Schema(
    {
        nome: String,
        sobrenome: String
    }
);
const ClienteModel = mongoose.model('cliente', clienteSchema);

router.get('/clientes',(req,res) =>{

    

    res.send('funcionando mongodb')
})

module.exports = router