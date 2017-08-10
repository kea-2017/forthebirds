import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import BirdList from './BirdList'
import BirdDetails from './BirdDetails'
import Testbirds from './Testbirds'
import {connect} from 'react-redux'
import {getBirds} from '../actions/birds'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  componentDidMount(){
    this.props.dispatch(getBirds())
  }
  componentDidUpdate() {
      this.props.dispatch(getBirds())
  }
  toggleForm() {
    this.setState({showForm: !this.state.showForm})
  }
  render(){
    return(
      <div className='app-container'>
        <h1>Birds</h1>
        <Router>
          <div className="router">
            <Route exact path="/" component={BirdList} />
            {this.state.showForm && <Route exact path="/" component={Testbirds} />}
            <Route path='/birds/:id' component={(props) => <BirdDetails id={props.match.params.id} />} />
          </div>
        </Router>
        <button onClick={() => this.toggleForm()}>{this.state.showForm ? 'Cancel' : 'Add Bird'}</button>
      </div>
    )
  }
}

//these all do the same thing
// <Route path="/birds/:id" component={(props) => <BirdDetails {...props} />} />
// <Route path="/birds/:id" component={(props) => <BirdDetails {...props} />} />
// <Route path="/birds/:id" component={BirdDetails} />
export default connect()(App)
