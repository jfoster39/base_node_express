exports.up = function (knex) {
  return knex.schema
    .createTable('tb_entity', function (table) {
      table.increments('id').primary();
      table.string('username');
      table.string('first_name');
      table.string('last_name');
      table.string('email_address');
      table.boolean('enabled');
    })
    .createTable('tb_location', function (table) {
      table.increments('id').primary();
      table.string('name');
	  table.integer('number');
      table.string('short_name');
      table.string('abbreviation');
      table.string('address_line_one');
      table.string('city');
    })
    .createTable('tb_role', function (table) {
      table.increments('id').primary();
      table.json('label');
      table.json('description');
      table.json('abbreviation');
    })
    .createTable('tb_entity_location', function (table) {
      table.increments('id').primary();
      table.integer('entity').unsigned().references('id').inTable('tb_entity');
      table.integer('location').unsigned().references('id').inTable('tb_location');
      table.integer('role').unsigned().references('id').inTable('tb_role');
      table.boolean('is_contact');
    })
    .createTable('tb_entity_role', function (table) {
      table.increments('id').primary();
      table.integer('entity').unsigned().references('id').inTable('tb_entity');
      table.integer('role').unsigned().references('id').inTable('tb_role');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tb_entity_role')
    .dropTableIfExists('tb_entity_location')
    .dropTableIfExists('tb_role')
    .dropTableIfExists('tb_location')
    .dropTableIfExists('tb_entity');
};
