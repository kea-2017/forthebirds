import request from "superagent"

export const editBirdAction = (bird) => {
  return {
    type: 'EDIT_BIRD',
    bird
  }
}

export function editBirdRequest (bird) {
  return (dispatch) => {
    request
    .put('/api/bird/' + bird.id)
    .send(bird)
    .end((err, res) => {
      if (err){
        console.log(err.message);
        return
      }
      dispatch(editBirdAction(bird))
    })
  }
  }
