const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.send('API do Projeto Mapeamento está funcionando! 🚀');
});

// Rotas específicas (depois vamos modularizar)
const leadRoutes = require('./routes/leadRoutes');
app.use('/api/leads', leadRoutes);

module.exports = app;

const leadValidadoRoutes = require('./routes/leadValidadoRoutes');
app.use('/api/leads-validados', leadValidadoRoutes);

const clienteAtivoRoutes = require('./routes/clienteAtivoRoutes');
app.use('/api/clientes-ativos', clienteAtivoRoutes);
