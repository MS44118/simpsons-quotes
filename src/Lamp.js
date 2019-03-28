//src/Lamp.js
import React, { Component } from 'react';

class Lamp extends Component {
  
  constructor(props){
    super(props);
    this.state = {   //the 'state' component is an object.
      on: props.on
    };
  }
  
  handleClick = () => {
    this.setState({on: !this.state.on});
  }

  render(){ //render = view from "ModelViewController"
    const light = this.state.on ? 'on' : 'off'; 
    //=IF this.props.on=true alors 'on' sinon 'off'
    return (
      <div className="Lamp">
        <button 
          onClick={this.handleClick}
          className={light}
        >
          {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }

}


export default Lamp;
