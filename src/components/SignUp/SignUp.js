import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import './SignUp.css'
  
class SignUp extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      dummy: null,
      width: 0,
      height: 0,
      signInVisible: false
    } 
    this.buttonHandler = this.buttonHandler.bind(this)
  }

  buttonHandler () {
    console.log('Button clicked')
  }

  render() {
    return (
      <div className='SignUp'>
        <NavBar />
        <form className='flexbox flex-wrap container'>
          <label>
            Email
          </label>
            <input
            >
            </input>
          <label>
            Password
          </label>
            <input>
            </input
      
            >
          <label>
            First Name
            <input>
            </input
      
            >
          </label>
          <label>
            Last Name
            <input>
            </input
      
            >
          </label>
          {/* Insert participant, researcher, company, industry component */} 
          <button
            type='button'
            className="sign-btn signin-btn"
            onClick={this.buttonHandler}
            value='Sign In'
          >Sign In
          </button>
        </form>
      </div>
    )
  }
}
  
export default SignUp

