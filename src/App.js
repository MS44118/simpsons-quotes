import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import Quote from "./Quote";
import Quotes from "./Quotes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Simpsons Quotes</h1>
        <Quotes/>
      </div>
    );
  }
}

export default App;
