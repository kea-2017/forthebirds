var express = require('express')
var router = express.Router()

var countriesDb = require('../db/countries')

router.get('/', (req, res) =>{
  let db = req.app.get('db')
  countriesDb.getCountries(db)
  .then(countries => {
    res.json(countries)
  })
})


module.exports = router
