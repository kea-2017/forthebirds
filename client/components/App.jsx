import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import BirdList from './BirdList'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Birds</h1>
      <Route exact path="/" component={BirdList} />
    </div>
  </Router>
)

export default App
