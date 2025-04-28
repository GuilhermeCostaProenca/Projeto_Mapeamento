exports.up = function(knex) {
    return knex.schema.createTable('leads_brutos', function(table) {
      table.increments('id').primary();
      table.string('nome_estabelecimento').notNullable();
      table.string('tipo_estabelecimento').notNullable();
      table.string('localizacao').notNullable();
      table.string('segmento').notNullable();
      table.string('fonte_dado').notNullable();
      table.timestamp('data_captura').defaultTo(knex.fn.now());
      table.float('curtailment_dik');
      table.float('curtailment_fik');
      table.timestamp('criado_em').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('leads_brutos');
  };
  