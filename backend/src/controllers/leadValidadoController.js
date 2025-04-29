const LeadValidadoService = require('../services/leadValidadoService');

const listarLeadsValidados = async (req, res) => {
  try {
    const leads = await LeadValidadoService.listarTodos();
    res.json(leads);
  } catch (error) {
    console.error('Erro ao listar leads validados:', error);
    res.status(500).json({ mensagem: 'Erro ao listar leads validados.' });
  }
};

const criarLeadValidado = async (req, res) => {
  try {
    const novoLead = await LeadValidadoService.criar(req.body);
    res.status(201).json(novoLead);
  } catch (error) {
    console.error('Erro ao criar lead validado:', error);
    res.status(500).json({ mensagem: 'Erro ao criar lead validado.' });
  }
};

module.exports = { listarLeadsValidados, criarLeadValidado };
