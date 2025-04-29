const ClienteAtivoService = require('../services/clienteAtivoService');

const listarClientes = async (req, res) => {
  try {
    const clientes = await ClienteAtivoService.listarTodos();
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao listar clientes ativos:', error);
    res.status(500).json({ mensagem: 'Erro ao listar clientes ativos.' });
  }
};

const criarCliente = async (req, res) => {
  try {
    const novoCliente = await ClienteAtivoService.criar(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente ativo:', error);
    res.status(500).json({ mensagem: 'Erro ao criar cliente ativo.', erro: error.message });
  }
};

module.exports = { listarClientes, criarCliente };
