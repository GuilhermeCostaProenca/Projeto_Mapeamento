const LeadValidado = require('../models/LeadValidado');

class LeadValidadoService {
  static async listarTodos() {
    return await LeadValidado.getAll();
  }

  static async criar(data) {
    return await LeadValidado.create(data);
  }
}

module.exports = LeadValidadoService;
