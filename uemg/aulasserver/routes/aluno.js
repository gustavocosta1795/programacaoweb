var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')

//ROTA PARA RECUPERAR ALL
router.get('/aluno', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from aluno"
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
router.get('/aluno/:id', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from aluno where idaluno = " + req.params.id 
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

router.post('/aluno',(req, res) => {
    var nome = req.body.nome
    var email = req.body.email
    var telefone = req.body.telefone
    var turma_idturma = req.body.turma_idturma
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `insert into aluno(nome) values ("${nome}"), ("${email}", ("${telefone}"), ("${turma_idturma}")`
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

router.patch('/aluno/:id',(req, res) => {
    var nome = req.body.nome
    var email = req.body.email
    var telefone = req.body.telefone
    var turma_idturma = req.body.turma_idturma
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `update aluno set nome = "${nome}", email = "${email}", telefone = "${telefone}", turma_idturma = "${turma_idturma}" where idaluno = ${idaluno}`
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
router.delete('/aluno/:id',(req, res) => {
    var idturma = req.params.id
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `delete from turma where idaluno = ${idaluno}`
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
