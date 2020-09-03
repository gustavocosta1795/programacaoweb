var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')

//ROTA PARA RECUPERAR ALL
router.get('/fornecedor', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from fornecedor"
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
router.get('/fornecedor/:id', (req, res) => {
    var resposta = {
        status : 'ok',
        dados : []
    }
    var sql = "select * from fornecedor where idfornecedor = " + req.params.id 
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

router.post('/fornecedor',(req, res) => {
    var nome_fornecedor = req.body.nome_fornecedor
    var cnpj = req.body.cnpj
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `insert into fornecedor(nome_fornecedor, cnpj) values ("${nome_fornecedor}", "${cnpj}")`
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

router.patch('/fornecedor/:id',(req, res) => {
    var idfornecedor = req.params.id
    var nome_fornecedor = req.body.nome_fornecedor
    var cnpj = req.body.cnpj
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `update fornecedor set nome_fornecedor = "${nome_fornecedor}", cnpj = "${cnpj}" where idfornecedor = ${idfornecedor}`
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
router.delete('/fornecedor/:id',(req, res) => {
    var idfornecedor = req.params.id
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = `delete from fornecedor where idfornecedor = ${idfornecedor}`
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
