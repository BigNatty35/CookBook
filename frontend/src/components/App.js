import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {setCurrentUser} from '../actions/authActions';
import setAuthToken from '../utils/setAuthToken';
import store from '../store/store';
import Navbar from '../components/layout/Navbar';
import Modal from '../components/modal/Modal';
import Questions from '../components/question/Questions';
import '../App.css';


// Check local storage for a token
if(localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token to get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // set the current user and is authenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Modal />
        <Route exact path="/questions" component={Questions}/>
      </div>
      </Router>
    );
  }
}




export default App;
