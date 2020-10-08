var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const turmasService = require("../bin/turmas_service")
turmasService.register(router, '/turmas')

module.exports = router