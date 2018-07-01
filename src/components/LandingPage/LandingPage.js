import React from 'react'
import NavBar from '../NavBar/NavBar'
import WidePgForm from './Forms/WidePgForm'
import './LandingPage.css'

var LandingPage = (props) => {
    return ( 
      <div className="LandingPage">
        <NavBar />
        <h1 className="LandingPage-app-title">Lab-Rat</h1>
        <WidePgForm/>
      </div>
    )
} 

export default LandingPage
