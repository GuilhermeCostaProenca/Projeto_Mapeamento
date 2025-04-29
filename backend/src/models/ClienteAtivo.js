const knex = require('../database/connection');

class ClienteAtivo {
  static async getAll() {
    return await knex('clientes_ativos');
  }

  static async create(data) {
    return await knex('clientes_ativos').insert(data).returning('*');
  }
}

module.exports = ClienteAtivo;
