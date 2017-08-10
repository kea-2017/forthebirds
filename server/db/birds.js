function insertBird(bird, db) {
  return db('birds')
    .insert(bird)
}

module.exports = {
    insertBird
}
