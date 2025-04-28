const LeadBruto = require('../models/LeadBruto');

class LeadService {
  static async listarLeads(filtros) {
    return await LeadBruto.getFiltered(filtros);
  }

  static async criarLead(data) {
    return await LeadBruto.create(data);
  }
}

module.exports = LeadService;
