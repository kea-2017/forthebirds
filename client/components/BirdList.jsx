
import React from 'react'
import {connect} from 'react-redux'



const renderBirds = (birds, key) => (
  <h1 key={key}>{birds.name}</h1>
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
