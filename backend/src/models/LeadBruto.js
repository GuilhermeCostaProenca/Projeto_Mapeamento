const knex = require('../database/connection');

class LeadBruto {
  static async getAll() {
    return await knex('leads_brutos');
  }

  static async create(data) {
    return await knex('leads_brutos').insert(data).returning('*');
  }
}

module.exports = LeadBruto;
