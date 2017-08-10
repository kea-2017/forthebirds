import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import Testbirds from './Testbirds'


const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Greetings} />
      <Testbirds />
    </div>
  </Router>
)

export default App
