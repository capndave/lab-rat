import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  constructor(props) { 
    super(props)
    this.state = {
      email: '',
      password: ''
    } 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
 
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('State is', this.state)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {

    return (
      <form className="SignIn" onSubmit = {this.handleSubmit}>
        <input type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input type="text"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignIn;

