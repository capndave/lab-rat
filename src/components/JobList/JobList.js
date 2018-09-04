import React, { Component } from 'react';
import './NavBar.css';

class JobList extends Component { 
  constructor(props) { 
    super(props)
    this.state = {
      dummy: null
    } 
    // this.handleNameChange = this.handleNameChange.bind(this) 
  }
  

  render() { 
   
    return ( 
      <div className="JobList"> 
        <ul>
          <li>Item One </li>
          <li>Item Two </li>
        </ul>
      </div>
    );
  }
} 

export default JobList;

