var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '6bw6000',
  database : 'turma'
});


module.exports = connection