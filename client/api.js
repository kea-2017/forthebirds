import request from 'superagent'

var requestUrl = 'http://localhost:3000/#/testbird'


export function insertBirds(bird, callback) {
  console.log("Hey, Bird details:" + bird)
  request
    .post(requestUrl+'/v1')
    .send(bird)
    .end((err, res) => {
      if (err) {
        callback(err)
        document.location = '/error'
      } else {
        document.location = '/thanks'
        callback(null)
      }
    })
}
