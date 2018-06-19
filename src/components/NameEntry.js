import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NameEntry.css'

var NameEntry = (props) => {

    return (
      <form className="NameEntry-flex-form" autoComplete="off" >
        <label>
          <input className="NameEntry-input" type="text" name="firstName" placeholder="First Name" onChange={(event) =>props.handleChange(event)} />
        </label>
        <label>
          <input className="NameEntry-input" type="text" name="lastName" 
placeholder="Last Name" onChange={(event) =>props.handleChange(event)} />
        </label>
        <button
          className="NameEntry-submit-button"
          onClick={
            (event) => {
              event.preventDefault()
              props.handleSubmit(event)}
          }>Submit
        </button>
      </form>
    )
} 

NameEntry.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default NameEntry
// onSubmit={this.props.handleSubmit()
