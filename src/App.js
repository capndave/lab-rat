import React, { Component } from 'react'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import SignUp from './components/SignUp/SignUp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: <LandingPage handleSignUp={this.handleSignUp}/>
    }
  }
  handleSignUp = (sign) => {
    this.setState({
      route: <SignUp />
    })
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
