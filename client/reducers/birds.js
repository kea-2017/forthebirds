function birds (state = [], action) {
  let newState = [...state]
  switch (action.type) {
    case 'RECEIVE_BIRDS':
    return [...action.birds]
    case "DELETE_BIRD":
    return newState.filter((bird) => bird !== action.bird)
    case "EDIT_BIRD" :
    return newState.find((bird)=> bird == action.bird)
    default:
    return state
  }
}

export default birds
