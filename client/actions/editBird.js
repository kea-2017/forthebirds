import request from "superagent"

export const editBird = (bird) => {
  return {
    type: 'EDIT_BIRD',
    bird
  }
}
