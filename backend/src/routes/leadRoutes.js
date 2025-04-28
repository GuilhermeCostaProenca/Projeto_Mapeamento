const express = require('express');
const router = express.Router();

// Aqui futuramente vamos importar o controller
router.get('/brutos', (req, res) => {
  res.json({ mensagem: 'Listando leads brutos' });
});

router.get('/validados', (req, res) => {
  res.json({ mensagem: 'Listando leads validados' });
});

module.exports = router;
