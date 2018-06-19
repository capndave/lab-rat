import React, { Component } from 'react';
import './App.css';
import NameEntry from './components/NameEntry'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: false,
      agent: false,
      exemption: false,
      hearingImpaired: false,
      other: false,
      protest: false,
      spanish: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.titleCase = this.titleCase.bind(this)
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.firstName, this.state.lastName)
  }

  titleCase (word) {
    return word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase()  
  }
  
  handleSubmit(event) {
    var name = {
      firstName: this.titleCase(this.state.firstName), 
      lastName: this.titleCase(this.state.lastName) 
    }
    console.log('submitted ' + JSON.stringify(name, undefined, 2))
  }
  
  render() {
    return (
      <div className="App">
          <h1 className="App-welcome-mssg">Welcome to Travis Central Appraisal District</h1>
          <NameEntry
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

export default App;
