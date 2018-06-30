import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummy: null
    }
    // this.handleNameChange = this.handleNameChange.bind(this)
  }

  view = <LandingPage />  
  

  render() {
   
    return (
      <div className="App">
        {this.view}
      </div>
    );
  }
}

export default App;
