import request from 'superagent'

export const receiveCountries =(countries) =>{
  return{
    type: 'RECEIVE_COUNTRIES',
    countries
  }
}


export function getCountries () {
  return (dispatch) => {
    request
    .get('/api/countries')
    .end((err, res) => {
      if (err){
        console.log(err.message);
        return
      }
      dispatch(receiveCountries(res.body))
    })
  }
}
