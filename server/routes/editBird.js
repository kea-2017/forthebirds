var express = require('express')
var router = express.Router()

var birdsDb = require('../db/birds')

router.put('/:id', (req, res) => {
  let db = req.app.get('db')
  var editaBird = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    country_id: req.body.country_id
  }

  birdsDb.editBird(editaBird, db)
  .then(res.redirect('/'))
  .catch(function(err){
    res.status(500).send(err.message)
  })
})


module.exports = router
