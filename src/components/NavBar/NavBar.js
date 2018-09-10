import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component { 
  constructor(props) { 
    super(props)
    this.buttonHandler = this.buttonHandler.bind(this)
  }

  buttonHandler (e) {
    console.log(this.props)
    e.preventDefault()
    this.props.handleRoute(e.target.value) 
  }

  render() { 
    return ( 
      <div className="NavBar flexbox flex-wrap"> 
        <div className="app-title">Lab-Rat</div>
        <div className="buttons flexbox flex-wrap">
          <button
            type='button'
            className="sign-btn signin-btn"
            onClick={this.buttonHandler}
            value='signIn'
          >Sign In
          </button>
          <button
            type='button'
            className="sign-btn signup-btn"
            onClick={this.buttonHandler}
            value='signUp'
          >Sign Up
          </button>
        </div>
      </div>
    )
  }
} 

export default NavBar
                         
