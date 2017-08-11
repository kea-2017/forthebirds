//just like the birds route need a get countries. then add to server js.
var express = require('express')
var router = express.Router()

var countriesDb = require('../db/countries')

router.get('/', (req, res) =>{
  let db = req.app.get('db')
  countriesDb.getCountries(db)
    .then(countries => {
      res.json(countries)
    })

  // birdsDb.getBirds(db).then(birds => res.json(birds))
})
module.exports = router
