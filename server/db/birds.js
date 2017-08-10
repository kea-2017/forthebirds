function insertBird(bird, db) {
  return db('birds')
    .insert(bird)
}

const getBirds = (db) => {
  return db('birds')
    .select('*')
}

module.exports = {
    insertBird,
    getBirds
}
