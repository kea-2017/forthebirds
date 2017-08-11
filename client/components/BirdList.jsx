import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getBirds} from '../actions/birds'
import {deleteBird} from '../actions/deleteBird'


const renderBirds = (bird, key) => (
  <Link to={'/birds/' + bird.id}  key={key}><h3>{bird.name}</h3></Link>
)

const Birds = ({birds, dispatch}) => (
  <div>
    {birds.map(renderBirds)}
  </div>
)

const mapStateToProps = (state) => {
return {birds: state.birds}
}

export default connect(mapStateToProps)(Birds)
