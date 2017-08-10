import React from 'react'
import {connect} from 'react-redux'

import {getGreetings} from '../actions/greetings'

const renderGreeting = (greeting, key) => (
  <h1 key={key}>{greeting.text}</h1>
)

const Greetings = (props) => (
  <div>
    <button onClick={() => props.dispatch(getGreetings())}>Show Greetings</button>
    {props.greetings.map(renderGreeting)}

  </div>
)

const mapStateToProps = (state) => {
return {greetings: state.greetings}

}

export default connect(mapStateToProps)(Greetings)
