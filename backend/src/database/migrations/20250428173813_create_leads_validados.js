exports.up = function(knex) {
    return knex.schema.createTable('leads_validados', function(table) {
      table.increments('id').primary();
      table.integer('lead_bruto_id').unsigned().references('id').inTable('leads_brutos').onDelete('CASCADE');
      table.string('validado_por').notNullable(); // Nome do responsável pela validação
      table.text('observacoes'); // Observações gerais
      table.timestamp('data_validacao').defaultTo(knex.fn.now());
      table.timestamp('criado_em').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('leads_validados');
  };
  