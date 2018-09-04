import React from 'react'
import NavBar from '../NavBar/NavBar'
import AboutLabRats from './About/AboutLabRats'
import AboutResearchers from './About/AboutResearchers'
import './LandingPage.css'

var LandingPage = (props) => {
    return ( 
      <div className="LandingPage">
        <NavBar />
      {/*<h3 className="LandingPage-subheader">Make money and improve understanding</h3>*/}
        <div className="LandingPage-Flex">
          <AboutLabRats />
          <AboutResearchers />
        </div>
      </div>
    )
} 

export default LandingPage
