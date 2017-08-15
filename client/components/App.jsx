import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import BirdList from './BirdList'
import BirdDetails from './BirdDetails'
import BirdForm from './BirdForm'
import {connect} from 'react-redux'
import {getBirds} from '../actions/birds'
import {getCountries} from '../actions/countries'
import {insertBird} from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  componentDidMount(){
    this.props.dispatch(getCountries())
    this.props.dispatch(getBirds())
  }
  componentDidUpdate() {
    this.props.dispatch(getBirds())
  }
  saveBird(bird){
     insertBird(bird, console.log)
  }
  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  render() {
    return (
      <div className='app-container'>
        <h1>Birds</h1>
        <Router>
          <div className="router">
            <Route exact path="/" component={BirdList}/>
             {this.state.showForm && <Route exact path="/"render={(props) => <BirdForm onSubmit={this.saveBird} {...props} /> } /> }
            <Route path='/birds/:id' component={(props) => <BirdDetails id={props.match.params.id} history={props.history}/>}/>
          </div>
        </Router>
        <button onClick={() => this.toggleForm()}>{this.state.showForm
            ? 'Cancel'
            : 'Add Bird'}</button>
      </div>
    )
  }
}

//these all do the same thing
// <Route path="/birds/:id" component={(props) => <BirdDetails {...props} />} />
// <Route path="/birds/:id" component={BirdDetails} />
export default connect()(App)
