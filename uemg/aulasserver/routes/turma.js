var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')

//ROTA PARA RECUPERAR ALL
router.get('/turma', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from turma"
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
router.get('/turma/:id', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from turma where idturma = " + req.params.id 
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

router.post('/turma',(req, res) => {
    var nome_turma = req.body.nome_turma
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `insert into turma(nome_turma) values ("${nome_turma}")`
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

router.patch('/turma/:id',(req, res) => {
    var idturma = req.params.id
    var nome_turma = req.body.nome_turma
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `update turma set nome_turma = "${nome_turma}" where id_cliente = ${id_cliente}`
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
router.delete('/turma/:id',(req, res) => {
    var idturma = req.params.id
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `delete from turma where idturma = ${idturma}`
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
