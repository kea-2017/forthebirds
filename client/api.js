import request from 'superagent'

export function insertBird(bird, callback) {
  console.log("Hey, Bird details:" + bird)
  request
    .post('/v1/testbird')
    .send(bird)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null)
      }
    })
}
