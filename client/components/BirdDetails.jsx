import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getBirds} from '../actions/birds'
import {deleteBirdAction} from '../actions/deleteBird'

const renderBird = (bird, dispatch) => (
  <div>
    <p>{bird.name}</p>
    <p>{bird.description}</p>
    <p>{bird.country}</p>
    <img src={bird.imageUrl} width="500px" height="300px"/>
    <button onClick={() => dispatch(deleteBirdAction(bird))}>Lose bird</button>

  </div>
)

const BirdDetails = ({birds, dispatch, id}) => {
  let bird = birds.find(bird => bird.id == id)
  return (
    <div>
      <Link to='/'>Home</Link>
      {bird
        ? renderBird(bird, dispatch)
        : document.location = '/'
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state.birds);
  return {birds: state.birds}
}

export default connect(mapStateToProps)(BirdDetails)
