import React from 'react'
import PropTypes from 'prop-types'
import './NameEntry.css'

var NameEntry = (props) => {
    const tagline = props.spanish ? 'Favor de entregar su nombre completo' : 'Please enter your first and last name'  
    const buttonText = props.spanish ? 'Enviar' : 'Submit'  
    const firstName = props.spanish ? 'Primer Nombre' : 'First Name'  
    const lastName = props.spanish ? 'Appellido' : 'Last Name'  

    return ( 
      <div>
        <h2 className="NameEntry-Tagline">{ tagline }</h2>
        <form className="NameEntry-flex-form" autoComplete="off" >
          <label>
            <input className="NameEntry-input" type="text" name="firstName" placeholder={firstName} onChange={(event) =>props.handleNameChange(event)} />
          </label>
          <label>
            <input className="NameEntry-input" type="text" name="lastName" 
  placeholder={lastName} onChange={(event) =>props.handleNameChange(event)} />
          </label>
          <button
            className="NameEntry-submit-button"
            onClick={
              (event) => {
                event.preventDefault()
                props.handleNameSubmit(event)}
            }>{ buttonText  }
          </button>
        </form>
      </div>
    )
} 

NameEntry.PropTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default NameEntry
