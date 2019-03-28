//src/Working.js
import React, { Component } from 'react';
import donut from './donut.png';

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
    const homerWorking = this.state.working ? 'working' : 'notWorking';
    return (
      <div className="Working">
        <img className="Donut" src={donut} alt="donut"/>
        <p>Is Homer Working? {homerWorking}</p>
        <button onClick={this.letsHaveANap}>
          Need a Nap...? 
        </button>
      </div>
    )
  }

}



export default Working;

