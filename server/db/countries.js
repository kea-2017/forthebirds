const getCountries = (db) => {
  return db('countries')
    .select('*')
}

module.exports = {
    getCountries
}
