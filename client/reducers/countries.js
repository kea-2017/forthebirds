//same as birds add the reducer to the index js file
//
function countries (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_COUNTRIES':
      return [...action.countries]
    default:
      return state
  }
}

export default countries
