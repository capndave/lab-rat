import React, {Component} from 'react'
import AboutLabRats from './About/AboutLabRats'
import AboutResearchers from './About/AboutResearchers'
import './LandingPage.css'

function LandingPage () {
  return (
    <div className="LandingPage LandingPage-Flex">
      <AboutLabRats />
      <AboutResearchers />
    </div>
  )
}

export default LandingPage
