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
    .update('/api/bird/' + bird.id)
    .end((err, res) => {
      if (err){
        console.log(err.message);
        return
      }
      dispatch(editBirdAction(bird))
    })
  }
  }
