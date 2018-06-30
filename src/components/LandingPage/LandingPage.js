import React from 'react'
import NavBar from '../NavBar/NavBar'
import './LandingPage.css'

var LandingPage = (props) => {
    return ( 
      <div className="LandingPage">
        <NavBar />
        <h1 className="app-title">Lab-Rat</h1>
        <form className="LandingPage-flex-form" autoComplete="off" >
          <div className="LandingPage-group">
          </div>
        </form>
      </div>
    )
} 

export default LandingPage
