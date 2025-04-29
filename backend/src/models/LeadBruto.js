const knex = require('../database/connection');

class LeadBruto {
  static async getFiltered(filtros) {
    const query = knex('leads_brutos');

    if (filtros.segmento) {
      query.where('segmento', filtros.segmento);
    }
    if (filtros.tipo_estabelecimento) {
      query.where('tipo_estabelecimento', filtros.tipo_estabelecimento);
    }
    if (filtros.localizacao) {
      query.where('localizacao', 'like', `%${filtros.localizacao}%`);
    }
    if (filtros.fonte_dado) {
      query.where('fonte_dado', filtros.fonte_dado);
    }
    if (filtros.nome_estabelecimento) {
      query.where('nome_estabelecimento', 'like', `%${filtros.nome_estabelecimento}%`);
    }

    const page = filtros.page ? parseInt(filtros.page) : 1;
    const limit = filtros.limit ? parseInt(filtros.limit) : 100;
    const offset = (page - 1) * limit;

    query.limit(limit).offset(offset);

    return await query;
  }
}

module.exports = LeadBruto;
