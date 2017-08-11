function insertBird(bird, db) {
  return db('birds')
    .insert(bird)
}

const getBirds = (db) => {
  return db('birds')
    .select('*')
}

function delBird(bird_id, db) {
  return db('birds')
    .where('id', bird_id)
    .del()
}

module.exports = {
    insertBird,
    getBirds,
    delBird
}
