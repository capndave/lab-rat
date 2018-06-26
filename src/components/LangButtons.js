import React from 'react'
import './LangButtons.css'

var LangButtons = (props) => {
  return (
    <div className="Lang-flex-form">
      <h2 className="Lang-tagline">Select your preferred language.</h2>
      <h2 className="Lang-tagline">Elige su idioma preferida.</h2>
      <button 
        className="Lang-button"
        name="english"
        onClick={
          (event) => {
            event.preventDefault()
            props.handleLang(event)}
        }>English
      </button>
      <button
        className="Lang-button"
        name="spanish"
        onClick={
          (event) => {
            event.preventDefault()
            props.handleLang(event)}
        }>Espa&#241;ol
      </button>
    </div>
  )
} 

export default LangButtons
