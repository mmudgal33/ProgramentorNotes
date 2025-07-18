import React, { Component } from 'react';
import '../App.css';
import V25UnmountingChild from './V25UnmountingChild';  //as same folder for parent and child

//rcc,rconst,clg
export default class V25UnmountingParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:true
      }
    }
    changeState = () => {
        this.setState({
            active:false
        })
    }
  render() {
    return (
      <div className='App'>
        {this.state.active ? <V25UnmountingChild/> : <h1>Component deleted...</h1>}
        <button onClick={this.changeState}>change state</button>
      </div>
    )
  }
}

