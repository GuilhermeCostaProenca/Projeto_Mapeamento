const knex = require('../database/connection');

class LeadValidado {
  static async getAll() {
    return await knex('leads_validados');
  }

  static async create(data) {
    return await knex('leads_validados').insert(data).returning('*');
  }
}

module.exports = LeadValidado;
