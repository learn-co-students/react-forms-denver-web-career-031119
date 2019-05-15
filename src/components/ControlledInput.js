// Code ControlledInput Component Here
import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // handleFirstNameChange = event => {
    //     this.setState({
    //         firstName: event.target.value
    //     })
    //   }
       
    // handleLastNameChange = event => {
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleSubmit = event => {
        event.preventDefault();
        //we can send the main form data back to app.js here and do something with it. 
    }
   
    render() {
      return (
        <form onSubmit={ event => this.handleSubmit(event) }>
          <input type="text" name="firstName" value={this.state.firstName} onChange={event => this.handleChange(event)}/>
          <input type="text" name="lastName" value={this.state.lastName} onChange={event => this.handleChange(event)}/>
        </form>
      )
    }
  }