import React from 'react'
import './Confirm.css'

var Confirm = (props) => {
  const tagline = props.spanish ? 'Gracias. Asientese y le atendaremos en breve' : 'Thank you. Have a seat and we will call you shortly.'  
  return ( 
    <h2 className="Confirm-tagline">
      <span className="Confirm-checkmark">&#10004; &nbsp;</span>
    
      { tagline }
    </h2>
  )
} 

export default Confirm
