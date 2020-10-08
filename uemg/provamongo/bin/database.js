var restfull = require('node-restful')
var mongoose = restfull.mongoose

mongoose.connect('mongodb://localhost/prova_uemg')

const turmasSchema = new mongoose.Schema(
    {
        
        nome_turma: String,
        curso: String,
        data_inicio: Date

    }
);


module.exports = restfull.model("turma", turmasSchema)