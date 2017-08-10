function birds (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_BIRDS':
      return [...action.birds]
    default:
      return state
  }
}

export default birds
