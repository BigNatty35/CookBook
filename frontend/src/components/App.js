import React, { Component } from 'react';
import SessionForm from './session_form/session_form';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
class App extends Component {
  render() {
    return (
      <div> 
        <Navbar />
      </div>
    );
  }
}




export default App;
