
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {id: 1, name: 'New Zealand'},
        {id: 2, name: 'United States'},
        {id: 3, name: 'Ireland'}
      ]);
    });
};
