const express = require('express');
const router = express.Router();
const { listarLeads, criarLead } = require('../controllers/leadController');

// Rota para listar leads brutos
router.get('/', listarLeads);

// Rota para criar novo lead bruto
//router.post('/brutos', criarLead);

module.exports = router;
