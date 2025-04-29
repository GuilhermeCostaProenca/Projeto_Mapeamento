const express = require('express');
const router = express.Router();
const { listarClientes, criarCliente } = require('../controllers/clienteAtivoController');

router.get('/', listarClientes);
router.post('/', criarCliente);

module.exports = router;
