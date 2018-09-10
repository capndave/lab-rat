import React from 'react'
import NavBar from '../NavBar/NavBar'
import AboutLabRats from './About/AboutLabRats'
import AboutResearchers from './About/AboutResearchers'
import './LandingPage.css'

var LandingPage = props => {
  return (
    <div className="LandingPage">
      <NavBar handleRoute={props.handleRoute}/>
      <div className="LandingPage-Flex">
        <AboutLabRats />
        <AboutResearchers />
      </div>
    </div>
  )
}

export default LandingPage
