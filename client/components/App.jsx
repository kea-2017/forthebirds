import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import BirdList from './BirdList'
import BirdDetails from './BirdDetails'
import Testbirds from './Testbirds'


const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={BirdList} />
      <Route path="/birds/:id" component={BirdDetails} />
      <Route exact path="/" component={Testbirds} />
    </div>
  </Router>
)

export default App
