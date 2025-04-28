const LeadBruto = require('../models/LeadBruto');

class LeadService {
  static async listarLeads() {
    return await LeadBruto.getAll();
  }

  static async criarLead(data) {
    return await LeadBruto.create(data);
  }
}

module.exports = LeadService;
