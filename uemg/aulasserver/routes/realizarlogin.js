var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')


// comparar se o login e senha estão certos

router.post('/realizarlogin',(req, res) => {
    var login = req.body.login
    var senha = req.body.senha
    
   
   
    var resposta = {
        status : '',
        dados : undefined
    }
    var sql = "select * from login where login = '" + login + "' and senha = '" + senha + "'";
    conexao.query(sql, (erro, resultado) => {
        if(resultado && resultado.length) {
            resposta.status = 'Login e senha ok'
            resposta.dados = resultado
            res.send(resposta)
                      
        } else {
            resposta.status = 'erro'
            resposta.dados = erro
            res.send(resposta)
        }
    })
})



module.exports = router;
