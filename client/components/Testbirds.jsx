import React from 'react'
import { insertBirds } from '../api'

export default class Testbirds extends React.Component {
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
  finishAdd(err){
    if(err){
      console.log(err)
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={e => this.submitBird(e)}>

      <h4>Bird name</h4>
        <input name="name" placeholder="enter name" type="text" onChange={(e) => this.updateBirdDetails(e)}/>

      <h4>Bird Description </h4>
      <input name="description" placeholder="enter description" type="text" onChange={(e) => this.updateBirdDetails(e)}/>

      <h4>Bird Image</h4>
      <input name="image" placeholder="URL here" type="text" onChange={(e) => this.updateBirdDetails(e)}/>

      <p>Select a Country of Origin :
      <select name="animalcountry" onChange={(e) => this.updateBirdDetails(e)}>
        <option selected disabled>Where does this bird fligh from?</option>
        <option value="1"> New Zealand</option>
        <option value="2"> United States of America</option>
        <option value="3"> Ireland</option>
        <option value="4"> Poland</option>
      </select>
      </p>

      <p></p><input type="submit" /> <input type="submit" value="clear" onClick="" />
    </form>
    </div>
    )
  }
}
