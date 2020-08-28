var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodados')

//ROTA PARA RECUPERAR ALL
router.get('/clientes', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from clientes"
    conexao.query(sql, (erro, resultado) => {
        if(erro){
            resposta.status = 'erro'
            resposta.dado = erro
            res.send(resposta)
        } else {
            resposta.status = 'ok'
            resposta.dados = resultado
            res.send(resposta)
        }
    })
});
//ROTA PARA RECUPERAR UM REGISTRO APENAS
router.get('/clientes/:id', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from clientes where id_cliente = " + req.params.id 
    conexao.query(sql, (erro, resultado) => {
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
            res.send(resposta)
        } else {
            resposta.status = 'ok'
            resposta.dados = resultado
            res.send(resposta)
        }
    })
});

router.post('/clientes',(req, res) => {
    var nome_cliente = req.body.nome_cliente
    var sobrenome_cliente = req.body.sobrenome_cliente
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `insert into clientes(nome_cliente, sobrenome_cliente) values ("${nome_cliente}", "${sobrenome_cliente}")`
    conexao.query(sql, (erro, resultado) => {
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
            res.send(resposta)
        } else {
            resposta.status = 'ok'
            resposta.dados = resultado
            res.send(resposta)
        }
    })
})

router.patch('/clientes/:id',(req, res) => {
    var id_cliente = req.params.id
    var nome_cliente = req.body.nome_cliente
    var sobrenome_cliente = req.body.sobrenome_cliente
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `update clientes set nome_cliente = "${nome_cliente}", sobrenome_cliente = "${sobrenome_cliente}" where id_cliente = ${id_cliente}`
    conexao.query(sql, (erro, resultado) => {
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
            res.send(resposta)
        } else {
            resposta.status = 'ok'
            resposta.dados = resultado
            res.send(resposta)
        }
    })
})
router.delete('/clientes/:id',(req, res) => {
    var id_cliente = req.params.id
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `delete from clientes where id_cliente = ${id_cliente}`
    conexao.query(sql, (erro, resultado) => {
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
            res.send(resposta)
        } else {
            resposta.status = 'ok'
            resposta.dados = resultado
            res.send(resposta)
        }
    })
})

module.exports = router;
