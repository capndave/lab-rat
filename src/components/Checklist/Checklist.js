import React from 'react'
import './Checklist.css'

var Checklist = (props) => {
    // all necessary data imported as checkFields
    console.log(props.checkFields)
    const tagline = props.spanish ? 'Favor de checkar todo que les pertenece' : 'Please check all that pertain to you'  
    const buttonText = props.spanish ? 'Enviar' : 'Submit'  
    return ( 
      <div>
        <h2 className="Checklist-Tagline">{ tagline }</h2>
        <form className="Checklist-flex-form" autoComplete="off" >
          <button
            className="Checklist-submit-button"
            onClick={
              (event) => {
                event.preventDefault()
                props.handleChecklistSubmit(event)}
            }>{ buttonText  }
          </button>
        </form>
      </div>
    )
} 

export default Checklist
