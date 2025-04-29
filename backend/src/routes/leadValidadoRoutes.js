const express = require('express');
const router = express.Router();
const {
  listarLeadsValidados,
  criarLeadValidado
} = require('../controllers/leadValidadoController');

router.get('/', listarLeadsValidados);
router.post('/', criarLeadValidado);

module.exports = router;
