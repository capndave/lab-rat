import React, { Component } from 'react';
import './App.css';
import NameEntry from './components/NameEntry/NameEntry'
import LangButtons from './components/LangButtons/LangButtons'
import Checklist from './components/Checklist/Checklist'
import Confirm from './components/Confirm/Confirm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      checkFields: {
        address: true,
        exemption: false,
        protest: false,
        other: false,
        agent: false,
        hearingImp: false
      },
      spanish: false,
      langButtonsVisible: true,
      nameEntryVisible: false,
      checklistVisible: false,
      confirmVisible: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNameSubmit = this.handleNameSubmit.bind(this)
    this.handleChecklistSubmit = this.handleChecklistSubmit.bind(this)
    this.handleCheckClick = this.handleCheckClick.bind(this)
    this.handleLang = this.handleLang.bind(this)
    this.titleCase = this.titleCase.bind(this)
  }

  
  titleCase (word) {
    return word.trim().charAt(0).toUpperCase() + word.trim().slice(1).toLowerCase()  
  }
  
  handleNameChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.firstName, this.state.lastName)
  }
  
  handleNameSubmit(event) {
    this.setState({
      checklistVisible: true,
      nameEntryVisible: false
    })
  }
  
  handleChecklistSubmit(event) {
    console.log('Checklist submitted')
    this.setState({
      nameEntryVisible: false,
      confirmVisible: true
    })
  }

  handleCheckClick(event, name) {
    var checkFields = {...this.state.checkFields}
    checkFields[name] = !this.state.checkFields[event.target.name]
    this.setState({checkFields})
  }
  
  handleLang(event) {
    this.setState({
      spanish: event.target.name === 'spanish',
      langButtonVisible: false,
      nameEntryVisible: true 
    })
  }

  render() {
   
    /* List of visible elements - one visible at a time */
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
          handleNameChange={this.handleNameChange}
          handleNameSubmit={this.handleNameSubmit}
          spanish={this.state.spanish}
        />
    }
    if (this.state.checklistVisible) {
      visibleElement = 
        <Checklist
          handleChecklistSubmit={this.handleChecklistSubmit}
          handleCheckClick={this.handleCheckClick}
          spanish={this.state.spanish}
          checkFields={this.state.checkFields}   
        />
    }
    if (this.state.confirmVisible) {
      visibleElement = 
        <Confirm
          routeToStart={this.routeToStart}
        />
      
      // Return view to initial language selection 
      setTimeout(() => {
        this.setState({
          checklistVisible: false,
          langButtonsVisible: true,
          confirmVisible: false
        }) 
      }, 4000)
    
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
