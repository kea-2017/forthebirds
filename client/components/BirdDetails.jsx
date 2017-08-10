import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getBirds} from '../actions/birds'


const renderBird = (bird) => (
  <div>
    <p>{bird.name}</p>
    <p>{bird.description}</p>
    <p>{bird.country}</p>
     <img src={bird.image} width="500px" height="300px" />
    <Link to="/">HOME</Link>
  </div>
)


const BirdDetails = ({birds, dispatch}) => (


  <div>
    <button onClick={() => dispatch(getBirds())}>Show Birds</button>
    {birds.find(bird => bird.id === Number(this.props.match.params.id))}
  </div>
)
const mapStateToProps = (state) => {
return {birds: state.birds}

}
export default connect(mapStateToProps)(BirdDetails)
