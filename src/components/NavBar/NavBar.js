import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar () { 
  return ( 
    <div className="NavBar flexbox flex-wrap"> 
      <div className="app-title">Lab-Rat</div>
      <div className="buttons flexbox flex-wrap">
        <Link to='/signin'>
          <button className="sign-btn signin-btn">Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className="sign-btn signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  )
} 
