const LeadBruto = require('../models/LeadBruto');

class LeadService {
  static async listarLeads(filtros) {
    return await LeadBruto.getFiltered(filtros);
  }
}

module.exports = LeadService;
