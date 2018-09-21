import React, {Component} from 'react'
import ResearcherFields from './Children/ResearcherFields'
import InputFields from './Children/InputFields'
import RadioGroup from './Children/RadioGroup/RadioGroup'
import {
  hasUpperCase,
  hasLowerCase,
  hasSpecialChar,
} from '../../helpers/stringMethods'
import './SignUp.css'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: '',
      fName: '',
      lName: '',
      company: '',
      userType: "user",
      orgType: '',
      industries: [],
      errMssg: {
        email: null,
        pwd: null,
        fName: null,
        lName: null,
        company: null,
        industries: null,
      },
      signInVisible: false,
      isResearcher: true,
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.radioVals = ['user', 'researcher']
  }

  handleSubmit() {
    console.log('Button clicked')
    console.log(this.state)
  }

  handleInput(e) {
    if (e.target.name === 'email') {
      this.validateEmail(e.target.value)
    }
    if (e.target.name === 'pwd') {
      this.validatePwd(e.target.value)
    }
    if (e.target.type === 'radio') {
      this.setState({
        userType: e.target.value,
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
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
    let researcherFields

    if (this.state.userType === 'researcher') {
      researcherFields = (
        <ResearcherFields
          company={this.state.company}
          handleInput={this.handleInput}
          industries={this.state.industries}
          orgType={this.state.orgType}
          errMssgCompany={this.state.errMssg.company}
        />
      )
    }

    return (
      <div className="SignUp">
        <form
          className="flexbox flex-wrap container"
          onSubmit={this.handleSubmit}>
          <InputFields
            errMssg={this.state.errMssg}
            email={this.state.email}
            handleInput={this.handleInput}
            pwd={this.state.pwd}
            fName={this.state.fName}
            lName={this.state.lName}
          />
          <RadioGroup
            name="userType"      
            values={this.radioVals}
            handleInput={this.handleInput}
            checkedProp={this.state.userType}
          />
          {/*
          <div className="flexbox buttons margin-top-12">
            <button
              type="button"
              className="body-btn"
              onClick={this.buttonHandler}
              value="participant">
              Participant
            </button>
            <button
              type="button"
              className="body-btn"
              onClick={this.buttonHandler}
              value="researcher">
              Researcher
            </button>
          </div>
          */}
          {researcherFields}
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

export default SignUp
