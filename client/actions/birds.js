import request from 'superagent'

export const receiveBirds = (birds) => {
  return {
    type: 'RECEIVE_BIRDS',
    birds
  }
}

export function getBirds () {
  return (dispatch) => {
    request
    .get(`/api/birds`)
    .end((err, res) => {
      if (err) {
        console.error(err.message)
        return
      }
      dispatch(receiveBirds(res.body))
    })
  }
}
