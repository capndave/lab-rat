import React, { Component } from 'react';
import './App.css';
import NameEntry from './components/NameEntry'
import LangButtons from './components/LangButtons'

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
      langButtonsVisible: true,
      nameEntryVisible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLang = this.handleLang.bind(this)
    this.titleCase = this.titleCase.bind(this)
  }
  
  titleCase (word) {
    return word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase()  
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.firstName, this.state.lastName)
  }
  
  handleSubmit(event) {
    var name = {
      firstName: this.titleCase(this.state.firstName), 
      lastName: this.titleCase(this.state.lastName) 
    }
    console.log('submitted ' + JSON.stringify(name, undefined, 2))
  }
  
  handleLang(event) {
    //this.setState({[event.target.name]: event.target.value})
    console.log(event.target.name)
    this.setState({
      spanish: event.target.name === 'spanish'
    })
    this.setState({
      langButtonVisible: false,
      nameEntryVisible: true 
    })
  }

  render() {
    
    let visibleElement
    if (this.state.langButtonsVisible) {
      visibleElement =
        <LangButtons 
          handleLang={this.handleLang}
        /> 
    } 
    if (this.state.nameEntryVisible) {
      visibleElement = 
        <NameEntry
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          spanish={this.state.spanish}
        />
    }
    return (
      <div className="App">
        <h1 className="App-welcome-mssg">Welcome to Travis Central Appraisal District</h1>
        {visibleElement}
      </div>
    );
  }
}

export default App;
