var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/clientes', (req, res) => {
  var dadosFake = {
    status: 'ok',
    dados : [
        {id_cliente: 1, nome_cliente: "André", sobrenome_cliente: "Rabelo"},
        {id_cliente: 2, nome_cliente: "Eduardo", sobrenome_cliente: "Pereira"}
    ]
  }
  
    res.send(dadosFake);
});


router.get('/clientes/:id_clientes', (req, res) => {
    console.log(req.params.id_cliente)
    var dadosFake = {
      status: 'ok',
      dados : [
          {id_cliente: 1, nome_cliente: "André", sobrenome_cliente: "Rabelo"},
      ]
    }
    
      res.send(dadosFake);
  });
module.exports = router;
