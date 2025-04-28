const knex = require('../database/connection');

class LeadBruto {
  static async getAll() {
    return await knex('leads_brutos');
  }

  static async getFiltered(filtros) {
    const query = knex('leads_brutos');

    if (filtros.segmento) {
      query.where('segmento', filtros.segmento);
    }
    if (filtros.localizacao) {
      query.where('localizacao', 'like', `%${filtros.localizacao}%`);
    }
    if (filtros.tipo_estabelecimento) {
      query.where('tipo_estabelecimento', filtros.tipo_estabelecimento);
    }

    return await query;
  }

  static async create(data) {
    return await knex('leads_brutos').insert(data).returning('*');
  }
}

module.exports = LeadBruto;
