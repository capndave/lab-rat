import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      dummy: null,
      width: 0,
      height: 0,
      signInVisible: false
    } 
    this.buttonHandler = this.buttonHandler.bind(this)
  }
  buttonHandler (e) {
    // e.preventDefault()
    console.log('Event is', e.target.value)
    if (e.target.value === 'Sign In') {
    } else {
      this.props.handleSignUp('hello')
    } 

  }
  

  render() { 
    console.log('Props is NavBar are', this.props)
    return ( 
      <div className="NavBar flexbox flex-wrap"> 
        <div className="app-title">Lab-Rat</div>
        <div className="buttons flexbox flex-wrap">
          <button
            type='button'
            className="sign-btn signin-btn"
            onClick={this.buttonHandler}
            value='Sign In'
          >Sign In
          </button>
          <button
            type='button'
            className="sign-btn signup-btn"
            onClick={this.buttonHandler}
            value='Sign Up'
          >Sign Up
          </button>
        </div>
      </div>
    );
  }
} 

export default NavBar;                                                                            
                         
