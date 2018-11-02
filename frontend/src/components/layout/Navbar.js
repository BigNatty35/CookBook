import React from 'react';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions/modalActions';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
      <div className="navbar">
        <div className="container">
          <div className="navbox">
            <ul className="navbar-bar">
              <li>
                <a href="">WriteAboutIt</a>
              </li>
            </ul>
  
            <ul className="navbar-bar">
              <li onClick={() => this.props.openModal('Sign In')}>Login</li>
              <li onClick={() => this.props.openModal('Register')}>Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


const msp = state => {
  return {
    modal: state.ui
  };
};

const mdp = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(msp, mdp)(Navbar);


