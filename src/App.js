import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Middleman } from 'react-middleman';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(payload) {
    console.log('React-bro handler take payload from middleman', payload);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-topic">BCS Integration</p>
          <div className="App__middleman">
            <Middleman onClick={this.handleClick} eventName={'react-brolier-event'} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
