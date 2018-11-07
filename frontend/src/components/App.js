import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Modal from '../components/modal/Modal';
import Questions from '../components/question/Questions';
import '../App.css';

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
