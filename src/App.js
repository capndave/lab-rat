import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import SignUp from './components/SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/signup' component={SignUp} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
