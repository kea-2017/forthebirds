import React from 'react'
import { connect } from 'react-redux'


const BirdDetails = ({bird, dispatch}) => {

  return (
    <div>
      <p>{bird.name}</p>
      <p>{bird.description}</p>
      <p>{bird.country}</p>
    </div>

  )
}

export default connect()(BirdDetails)
