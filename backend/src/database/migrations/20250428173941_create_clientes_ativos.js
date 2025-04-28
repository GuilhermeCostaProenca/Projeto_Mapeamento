exports.up = function(knex) {
    return knex.schema.createTable('clientes_ativos', function(table) {
      table.increments('id').primary();
      table.integer('lead_validado_id').unsigned().references('id').inTable('leads_validados').onDelete('CASCADE');
      table.string('nome_cliente').notNullable();
      table.string('status_cliente').defaultTo('negociacao'); // pode ser negociacao, contrato fechado, perdido
      table.timestamp('data_inicio_contato').defaultTo(knex.fn.now());
      table.timestamp('criado_em').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('clientes_ativos');
  };
  