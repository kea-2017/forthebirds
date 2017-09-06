exports.seed = function(knex, Promise) {
  return knex('countries').del()
  .then(function () {
    return knex('countries').insert([
      {id: 1, name: 'New Zealand'},
      {id: 2, name: 'United States'},
      {id: 3, name: 'Ireland'}
    ]);
  });
};
