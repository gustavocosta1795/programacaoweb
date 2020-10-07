var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')

// buscar todas as linhas

router.get('/login', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from login"
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

//buscar uma linha pelo id

router.get('/login/:id', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from login where idlogin = " + req.params.id 
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
// inserir dados de login
router.post('/login',(req, res) => {
    var login = req.body.login
    var senha = req.body.senha
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
   
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `insert into login(login, senha, nome, sobrenome) values ("${login}", "${senha}", "${nome}", "${sobrenome}")`
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

// dar update em uma linha
router.patch('/login/:id',(req, res) => {
    var idlogin = req.params.id
    var login = req.body.login
    var senha = req.body.senha
    var nome = req.body.nome
    var sobrenome = req.body.email
    
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `update aluno set login = "${login}", senha = "${senha}", nome = "${nome}", sobrenome = "${sobrenome}" where idlogin = ${idlogin}`
    
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

//deletar uma informação pela id
router.delete('/login/:id',(req, res) => {
    var idlogin = req.params.id
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `delete from login where idlogin = ${idlogin}`
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
