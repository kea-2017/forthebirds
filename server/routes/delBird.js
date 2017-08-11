var express = require('express')
var router = express.Router()

var birdsDb = require('../db/birds')

router.delete('/:bird_id', (req, res) => {
    var db = req.app.get('db')
      birddb = delBird(req.params.bird_id, db){
        .then(() => {
          res.sendsatus(204)
        })
        .catch(err => {
          res.sendstatus(500).send(err + ' SERVER ERROR')
        })
      }
    })

module.exports = router
