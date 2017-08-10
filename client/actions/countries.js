// look at get birds action file for insperation
// create a new action async action for fetching countries and crteate a simple action
// for reciving countries.
import request from 'superagent'

export const receiveCountries =(countries) =>{
  return{
    type: 'RECEIVE_COUNTRIES'
    countries
  }
}


export function getCountries () {
  return (dispatch) => {
    request
      .get('/api/countries')
      .end((err, res){
        if err{
          console.log(err.message);
          return
        }
        dispatch(receiveCountries(res.body))
      })
  }
}
