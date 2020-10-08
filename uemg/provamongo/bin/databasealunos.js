const { Schema } = require('mongoose');
var restfull = require('node-restful')
var mongoose = restfull.mongoose

mongoose.connect('mongodb://localhost/prova_uemg')


const alunosSchema = new mongoose.Schema(
    {
        id_turma:[{type: mongoose.Schema.Types.ObjectId,
            ref:"turmas"
            
        }],
        nome_aluno: String,
        data_matricula: Date

    }
);
module.exports = restfull.model("alunos", alunosSchema)