import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NameEntry.css'

class NameEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    var sendObj = {
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim()
    }
    event.preventDefault()
  }

  render () {
    return (
      <form className="NameEntry-flex-form" onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </label>
        <input className="NameEntry-submit" type="submit" value="Submit" />
      </form>
    )
  }
} 

NameEntry.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default NameEntry
