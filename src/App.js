import React, { Component } from 'react'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      route: <LandingPage handleRoute={this.handleRoute}/>
    }
    this.handleRoute = this.handleRoute.bind(this)
  }
 
  handleRoute(route) {
    console.log('route passed to parent: ', route)
    if (route == 'signIn') {
      this.setState({
        route: <SignIn />
      })
    } else {
      this.setState({
        route: <SignUp />
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.route}
      </div>
    )
  }
}

export default App
