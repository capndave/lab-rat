import React, { Component } from 'react';
import './NavBar.css';
// import SignIn from './SignIn/SignIn'

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

  componentDidMount() {
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.buttonHandler = this.buttonHandler.bind(this)
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeElementListener('resize', this.updateWindowDimensions)
  }
  
  updateWindowDimensions () {
    this.setState({
      width: window.innerWidth,
      heigth: window.innerHeight
    })
  } 

  buttonHandler (e) {
    // e.preventDefault()
    console.log('Event is', e.target.value)
    if (e.target.value === 'Sign In') {
      this.setState({
        visibleElement: !this.state.signInVisible 
      })    
       
    } else {
      
    } 


    // this.setState({
    //   signInVisible: !this.state.signInVisible 
    // })    
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
                         
