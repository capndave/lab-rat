import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      dummy: null
    } 
    // this.handleNameChange = this.handleNameChange.bind(this) 
  }
  

  render() { 
   
    return ( 
      <div className="NavBar"> 
        <ul>
          <li className="app-title">Lab-Rat</li>
          <li>
            <div className="sign-btn signup-btn">Sign Up</div>
          </li>
          <li>
            <div className="sign-btn signin-btn">Sign In</div>
          </li>
        </ul>
      </div>
    );
  }
} 

export default NavBar;                                                                            
                         
