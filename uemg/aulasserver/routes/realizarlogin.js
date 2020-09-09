var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')

//ROTA PARA RECUPERAR ALL
router.get('/realizarlogin', (req, res) => {
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


//rota para capturar um registro
router.get('/realizarlogin/:id', (req, res) => {
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



//rota para inserir um registro
router.post('/realizarlogin',(req, res) => {
    var login = req.body.login
    var senha = req.body.senha
    
   
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `select * from login where login = '${login}' and senha = '${senha}')`
    conexao.query(sql, (erro, resultado) => {
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
            res.send(resposta)
        } else {
            resposta.status = 'Login e senha ok'
            resposta.dados = resultado
            res.send(resposta)
        }
    })
})


//rota para atualizar um registro
router.patch('/realizarlogin/:id',(req, res) => {
    var idlogin = req.params.id
    var login = req.body.login
    var senha = req.body.senha
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
   
   
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


//rota para deletar um registro
router.delete('/realizarlogin/:id',(req, res) => {
    var idlogin = req.params.id
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `delete from aluno where idlogin = ${idlogin}`
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
