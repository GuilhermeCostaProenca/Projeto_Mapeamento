const LeadService = require('../services/leadService');

const listarLeads = async (req, res) => {
  try {
    const filtros = req.query;
    const leads = await LeadService.listarLeads(filtros);
    res.json(leads);
  } catch (error) {
    console.error('Erro ao listar leads:', error);
    res.status(500).json({ mensagem: 'Erro ao listar leads.', erro: error.message });
  }
};

const criarLead = async (req, res) => {
  try {
    const novoLead = await LeadService.criarLead(req.body);
    res.status(201).json(novoLead);
  } catch (error) {
    console.error('Erro ao criar lead:', error);
    res.status(500).json({ mensagem: 'Erro ao criar lead.', erro: error.message });
  }
};

module.exports = { listarLeads, criarLead };
