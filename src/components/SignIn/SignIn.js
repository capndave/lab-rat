import React, {Component} from 'react'
import {
  hasUpperCase,
  hasLowerCase,
  hasSpecialChar,
} from '../../helpers/stringMethods'
import './SignIn.css'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: '',
      errMssg: {
        email: null,
        pwd: null,
      },
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e) {
    if (e.target.name === 'email') {
      this.validateEmail(e.target.value)
    }
    if (e.target.name === 'pwd') {
      this.validatePwd(e.target.value)
    }
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  
  handleSubmit() {
    console.log(this.state)
  }

  validateEmail(email) {
    this.setState({
      errMssg: {
        ...this.state.errMssg, // allows nesting
        email: !(email.includes('@') && email.includes('.') && email.length > 4)
          ? 'Invalid Email'
          : null,
      },
    })
  }

  validatePwd(pwd) {
    this.setState({
      errMssg: {
        ...this.state.errMssg, // allows nesting
        pwd: !(
          hasLowerCase(pwd) &&
          hasUpperCase(pwd) &&
          hasSpecialChar(pwd) &&
          pwd.length > 4
        )
          ? 'Invalid Pwd'
          : null,
      },
    })
  }

  render() {
    return (
      <div className="SignIn">
        <form
          className="flexbox flex-wrap container"
          onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <div className="errMssg color-orange">{this.state.errMssg.email}</div>
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label>Password</label>
            <div className="errMssg color-orange">{this.state.errMssg.pwd}</div>
            <input value={this.state.pwd} name="pwd" onChange={this.handleInput} />
          </div>
          <button
            id="signin-submit-btn"
            type="button"
            className="body-btn margin-top-12"
            onClick={this.handleSubmit}
            value="Submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
