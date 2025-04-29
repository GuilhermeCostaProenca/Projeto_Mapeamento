const ClienteAtivo = require('../models/ClienteAtivo');

class ClienteAtivoService {
  static async listarTodos() {
    return await ClienteAtivo.getAll();
  }

  static async criar(data) {
    return await ClienteAtivo.create(data);
  }
}

module.exports = ClienteAtivoService;
