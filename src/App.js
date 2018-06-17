import React, { Component } from 'react';
import './App.css';
import NameEntry from './components/NameEntry'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      address: false,
      agent: false,
      exemption: false,
      hearingImpaired: false,
      other: false,
      protest: false,
      spanish: false,
    }
  }
  render() {
    return (
      <div className="App">
          <h1 className="App-welcome-mssg">Welcome to Travis Central Appraisal District</h1>
          <NameEntry />
      </div>
    );
  }
}

export default App;
