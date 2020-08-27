var express = require('express');
var router = express.Router();
var conexao = require('../bin/bancodedados')

/* GET users listing. */
router.get('/clientes', (req, res) => {


//   var dadosFake = {
//     status: 'ok',
//     dados : [
//         {id_cliente: 1, nome_cliente: "André", sobrenome_cliente: "Rabelo"},
//         {id_cliente: 2, nome_cliente: "Eduardo", sobrenome_cliente: "Pereira"}
//     ]
//   }

    var sql = 'select * from clientes'
    conexao.query(sql, (erro,resultado) => {
        var resposta = {
            status : '',
            dados : []
        }
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
          //  console.log(erro)
            resposta.send(resposta)
        }else{
          //  console.log(resultado)
          resposta.status = 'ok'
          resposta.dados = resultado
            res.send(resposta);
        }
    })

  

});


router.get('/clientes/:id_cliente', (req, res) => {
    var sql = 'select * from clientes where id_cliente = ' + req.params.id_cliente
    conexao.query(sql, (erro,resultado) => {
        var resposta = {
            status : '',
            dados : []
        }
        if(erro){
            resposta.status = 'erro'
            resposta.dados = erro
          //  console.log(erro)
            resposta.send(resposta)
        }else{
          //  console.log(resultado)
          resposta.status = 'ok'
          resposta.dados = resultado
            res.send(resposta);
        }
    })
  });
module.exports = router;
