import React, {Component} from 'react'
import NavBar from '../NavBar/NavBar'
import AboutLabRats from './About/AboutLabRats'
import AboutResearchers from './About/AboutResearchers'
import './LandingPage.css'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'

class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: (
        <div className="LandingPage-Flex">
          <AboutLabRats />
          <AboutResearchers />
        </div>
      ),
    }
    this.handleRoute = this.handleRoute.bind(this)
  }

  handleRoute(route) {
    this.setState({
      route: route === 'signUp' ? <SignUp /> : <SignIn />
    })
  }

  render() {
    return (
      <div className="LandingPage">
        <NavBar handleRoute={this.handleRoute} />
        {this.state.route}
      </div>
    )
  }
}

export default LandingPage
