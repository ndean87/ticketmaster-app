import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './Events/MainContainer'

class App extends Component {
  render() {
    return(
      <div className="events">
        <MainContainer />
      </div>
    )
  }
}

export default App;
