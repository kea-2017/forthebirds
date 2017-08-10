var express = require('express')
var router = express.Router()

var birdsDb = require('../db/birds')

router.post('/', (req, res) => {
  let db = req.app.get('db')
  console.log(req.body);
  birdsDb.insertBird(req.body, db)
    .then(bird => {
      res.json(bird)
    })
})


module.exports = router
