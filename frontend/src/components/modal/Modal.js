import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from '../../components/session_form/SignUpForm';
import LoginForm from '../../components/session_form/LoginForm';

function Modal({modal}) {

  if(!modal) {
    return null;
  }

  let component;

  switch(modal) {
    case 'Sign In':
      component = <LoginForm />; //TODO: create sign in form
      break;
    case 'Register':
      component = <SignUpForm />; // TODO: create register form
      break;
    default:
      return null;
  }
  
  return (
    <div>
      {component}
    </div>
  );
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
};

export default connect(msp, null)(Modal);