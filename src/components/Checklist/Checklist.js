import React from 'react'
import './Checklist.css'

var Checklist = (props) => {
    // all necessary data imported as checkFields
    const tagline = props.spanish ? 'Favor de checkar todo que les pertenece' : 'Please check all that pertain to you'  
    const buttonText = props.spanish ? 'Enviar' : 'Submit'  
    const engFields = [
      'Address Issue',
      'Exemption Issue',
      'Protest Issue',
      'Other Issue',
      'I am an Agent',
      'I am hearing-impaired'
    ]
    const spanFields = [
      'Problema de Dirección',
      'Problema de Exención',
      'Problema de Protesta',
      'Otra Problema',
      'Soy Agente',
      'Tengo una discapacidad auditiva'
    ]
    const useFields = props.spanish ? spanFields : engFields
  
    let checkboxes = Object.entries(props.checkFields).map((i, n) => 
         <label className="Checklist-label">
           <input
             className="Checklist-checkbox"
             type="checkbox"
             checked={ i[1] }
             key={ n }
             name={ i[0] }
             onClick={(event) => {
               props.handleCheckClick(event, i[0])
             }}
           />
           <span>{ useFields[n] }</span>
         </label>
       )
    Object.entries(props.checkFields).forEach((i, n) => {
      console.log(i[0])
    })

    return ( 
      <div>
        <h2 className="Checklist-Tagline">{ tagline }</h2>
        <form className="Checklist-flex-form" autoComplete="off" >
          <div className="Checklist-group">
          { checkboxes }
          </div>
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
