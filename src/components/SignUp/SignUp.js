import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import { hasUpperCase, hasLowerCase, hasSpecialChar } from '../../helpers/stringMethods'
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
      errMssg: {
        email: null,
        pwd: null,
        fName: null,
        lName: null
      },
      signInVisible: false
    } 
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit () {
    console.log('Button clicked')
  }

  handleInput (e) {
    if (e.target.name==='email') {
      this.validateEmail(e.target.value)
    }
    if (e.target.name==='pwd') {
      this.validatePwd(e.target.value)
    }
    this.setState({
      [e.target.name]: e.target.value    
    })
  } 

  validateEmail (email) {
    this.setState({
      errMssg: {
        ...this.state.errMssg, // allows nesting
        email:!(email.includes('@') && email.includes('.') && (email.length > 4)) ? 'Invalid Email' : null
      }
    })
  }
  
  validatePwd (pwd) {
    this.setState({
      errMssg: {
        ...this.state.errMssg, // allows nesting
        pwd:!(hasLowerCase(pwd) && hasUpperCase(pwd) && hasSpecialChar(pwd) && (pwd.length > 4)) ? 'Invalid Pwd' : null
      }
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
            <div
              className='errMssg color-orange'
            >
              { this.state.errMssg.email }
            </div>
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
            <div
              className='errMssg color-orange'
            >
              { this.state.errMssg.pwd }
            </div>
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
            <div
              className='errMssg color-orange'
            >
              { this.state.errMssg.fName }
            </div>
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
            <div
              className='errMssg color-orange'
            >
              { this.state.errMssg.lName }
            </div>
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
            onClick={this.handleSubmit}
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

