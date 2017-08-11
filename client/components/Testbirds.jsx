import React from 'react'
import {insertBird} from '../api'
import {connect} from 'react-redux'

class Testbirds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bird: {}
    }
    this.submitBird = this.submitBird.bind(this)
    this.updateBirdDetails = this.updateBirdDetails.bind(this)
  }
  updateBirdDetails(e) {
    let bird = this.state.bird
    bird[e.target.name] = e.target.value
    //do something
    this.setState({bird: bird})
    console.log("the Address is:", this.state.bird);
  }

  submitBird(e) {
    e.preventDefault()
    console.log(this.state.bird)
    insertBird(this.state.bird, this.finishAdd.bind(this))
  }
  finishAdd(err) {
    if (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitBird(e)}>

          <h4>Bird name</h4>
          <input name="name" placeholder="enter name" type="text" onChange={(e) => this.updateBirdDetails(e)}/>

          <h4>Bird Description
          </h4>
          <input name="description" placeholder="enter description" type="text" onChange={(e) => this.updateBirdDetails(e)}/>

          <h4>Bird Image</h4>
          <input name="imageUrl" placeholder="URL here" type="text" onChange={(e) => this.updateBirdDetails(e)}/>

          <p>Select a Country of Origin :
          </p>
          <select name="country_id" onChange={(e) => this.updateBirdDetails(e)}>
            <option selected disabled>Where does this bird fly from?</option>
            {this.props.countries.map((country) => {
              return (
                <option value={country.id}>{country.name}</option>
              )
            })}
          </select>

          <p></p><input type="submit"/>
          <input type="submit" value="clear" onClick=""/>
        </form>
      </div>
    )
  }

}
function mapStateToProps(state) {
  return {countries: state.countries}
}

export default connect(mapStateToProps)(Testbirds)
// <!-- get the options form the props map over them to make the option list-->
// make this a connected Component and get the countries from the state.
// on Component did mount dispatch an action to load all countries from the api.
