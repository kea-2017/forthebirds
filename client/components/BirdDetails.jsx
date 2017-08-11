import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getBirds} from '../actions/birds'
import {deleteBirdRequest} from '../actions/deleteBird'
import {editBirdAction} from '../actions/editBird'

class BirdDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false
    }
  }
  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    })
  }deleteBirdAction
  render() {
    const {birds, dispatch, id} = this.props
    const renderBird = (bird) => (
      <div>
      <p>{bird.name}</p>
      <p>{bird.description}</p>
      <p>{bird.country}</p>
      <img src={bird.imageUrl} width="500px" height="300px"/><br/>
      <button onClick={this.toggleForm.bind(this)}>Edit bird</button><br/>
      <button onClick={() => dispatch(deleteBirdRequest(bird))
        }>Lose bird</button>
          </div>
    )

    let bird = birds.find(bird => bird.id == id)
    return (
      <div>
        <Link to='/'>Home</Link>
        {bird
          ? renderBird(bird)
          : this.props.history.push('/')
        }
        {this.state.showForm ? 'form' : 'no-form'}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    birds: state.birds
  }
}
export default connect(mapStateToProps)(BirdDetails)
