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
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    );
  }
} 

export default NavBar;                                                                            
                         
