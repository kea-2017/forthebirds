function insertBird(bird, db) {
  return db('birds')
  .insert(bird)
}

const getBirds = (db) => {
  return db('birds')
  .select('birds.*', 'countries.name as country')
  .join('countries', 'birds.country_id', 'countries.id')
}

function delBird(bird_id, db) {
  return db('birds')
  .where('id', bird_id)
  .del()
}

function editBird(bird, db){
  return db('birds')
  .where('id', bird.id)
  .update(bird)
}
module.exports = {
  insertBird,
  getBirds,
  delBird,
  editBird
}
