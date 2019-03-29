//src/Working.js
import React, { Component } from 'react';
import donut from './donut.png';
import './Working.css';

class Working extends Component{

  constructor(props){
    super(props);
    this.state = {
      working: props.working
    };
  }

  letsHaveANap = () => {
    this.setState({working: !this.state.working});
  }

  render(){
    const homerWorking = this.state.working ? 'isWorking' : 'notWorking';
    return (
      <div className="Working">
        <img 
          className={homerWorking} 
          src={donut} 
          alt="donut"
        />
        <p>Is Homer Working?</p>
        <p>{homerWorking}</p>
        <button 
          onClick={this.letsHaveANap}
          className={homerWorking}
        >
          Change 
        </button>
      </div>
    )
  }

}



export default Working;

