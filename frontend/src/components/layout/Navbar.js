import React from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modalActions';
import {logoutUser} from '../../actions/authActions';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isAuthenticated, user} = this.props.auth;

    const guestLinks = (
      <ul className="navbar-bar">
        <li onClick={() => this.props.openModal('Sign In')}>Login</li>
        <li onClick={() => this.props.openModal('Register')}>Sign Up</li>
      </ul>
    );

    const loggedIn = (
      <ul className="navbar-bar">
        <li onClick={() => this.props.logoutUser(this.props.history)}>Logout</li>
      </ul>
    );

    return (
      <div className="navbar">
        <div className="container">
          <div className="navbox">
            <ul className="navbar-bar">
              <li>
                <Link to="/">WriteAboutIt</Link>
              </li>
            </ul>
            {isAuthenticated ? loggedIn : guestLinks}
          </div>
        </div>
      </div>
    );
  }
}


const msp = state => {
  return {
    modal: state.ui,
    auth: state.auth
  };
};



export default connect(msp, {openModal, logoutUser})(withRouter(Navbar));