exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('birds', (table) => {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.integer('country_id')
    table.string('imageUrl')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('birds')
};
