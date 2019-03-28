//src.App.js
import React, { Component } from 'react'; //{Component} quand synthaxe longue (CLASS)
import './App.css';
import donut from './donut.png';

// import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import Working from "./Working";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
          <Working />
        </header>
        <section>
          <h1 className="App-title">Simpsons On/Off</h1>
          <Lamp on  /*boolean with implicit true ~ on={true}*/ /> 
          <Lamp /*boolean undefined*/ />
          <Quotes />
        </section>
      </div>
    );
  }
}

export default App;
