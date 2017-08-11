import request from "superagent"

export const deleteBirdAction = (bird) => {
  return {
    type: 'DELETE_BIRD',
    bird
  }
}

export function deleteBirdRequest (bird) {
  return (dispatch) => {
    request
      .delete('/api/bird/' + bird.id)
      .end((err, res) => {
        if (err){
          console.log(err.message);
          return
        }
        dispatch(deleteBirdAction(bird))
      })
  }
}
