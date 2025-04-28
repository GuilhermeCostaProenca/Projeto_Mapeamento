const LeadService = require('../services/leadService');

const listarLeads = async (req, res) => {
  try {
    const leads = await LeadService.listarLeads();
    res.json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao listar leads.' });
  }
};

const criarLead = async (req, res) => {
  try {
    const novoLead = await LeadService.criarLead(req.body);
    res.status(201).json(novoLead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao criar lead.' });
  }
};

module.exports = { listarLeads, criarLead };
