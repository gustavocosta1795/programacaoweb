var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const alunosService = require("../bin/alunos_service")
alunosService.register(router, '/alunos')

module.exports = router