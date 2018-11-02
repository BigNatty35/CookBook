import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Modal from '../components/modal/Modal';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Modal />
      </div>
    );
  }
}




export default App;
