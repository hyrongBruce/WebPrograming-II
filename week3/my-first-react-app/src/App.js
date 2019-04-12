import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Just google It
          </a>
        </header>
        <Clock date={new Date()} timeDif ={0} location={"China"}/>
        <Clock date={new Date()} timeDif ={-13} location={"U.S."}/>
        <Clock date={new Date()} timeDif ={-12} location={"Japan"}/>
      </div>
    );
  }
}

export default App;
