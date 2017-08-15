var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var editBird = require('./routes/editBird')
var newBird = require('./routes/newBird')
var delBird = require('./routes/delBird')
var greetings = require('./routes/greeting')
var countries = require('./routes/countries')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/birds', newBird)

server.use('/api/birds', delBird)

server.use('/api/countries', countries)

server.use('/v1/testbird', newBird )

server.use('/api/bird/', editBird )

module.exports = function(db) {
  server.set('db', db)
  return server
}

//need to add .use for the countries api.
