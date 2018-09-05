import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './SignUp.css'
  
class SignUp extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      email: '',
      pwd: '',
      fName: '',
      lName: '',
      participant: false,
      researcher: true,
      signInVisible: false
    } 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit () {
    console.log('Button clicked')
  }

  handleInput (e) {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value    
    })
  } 

  render() {
    return (
      <div className='SignUp'>
        <NavBar />
        <form
          className='flexbox flex-wrap container'
          onSubmit={this.handleSubmit}
        >
          <div>
            <label>
              Email
            </label>
            <input
              value={this.state.email}
              name='email'
              onChange={this.handleInput}
            >
            </input>
          </div>
          <div>
            <label>
              Password
            </label>
            <input
              value={this.state.pwd}
              name='pwd'
              onChange={this.handleInput}
            >
            </input>
          </div> 
          <div> 
            <label>
              First Name
            </label>
            <input
              value={this.state.fName}
              name='fName'
              onChange={this.handleInput}
            >
            </input>
          </div>
          <div>
            <label>
              Last Name
            </label>
            <input
              value={this.state.lName}
              name='lName'
              onChange={this.handleInput}
            >
            </input>
          </div>
          <div className='flexbox buttons'>
            <button
              type='button'
              className="body-btn"
              onClick={this.buttonHandler}
              value='participant'
            >
              Participant           
            </button>
            <button
              type='button'
              className="body-btn"
              onClick={this.buttonHandler}
              value='researcher'
            >
              Researcher           
            </button>
          </div>
          {/* Insert participant, researcher, company, industry component */} 
          <button
            id='signin-submit-btn'
            type='button'
            className="body-btn"
            onClick={this.buttonHandler}
            value='Submit'
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}
  
export default SignUp

