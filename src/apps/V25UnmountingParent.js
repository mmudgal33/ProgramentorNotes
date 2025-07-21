import React, { Component } from 'react';
import '../App.css';
// import V25UnmountingChild from './V25UnmountingChild';  //as same folder for parent and child

//rcc,rconst,clg
export class V25UnmountingParent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: true
    }
  }
  
  changeState = () => {
    this.setState({
      // active: false
      active: this.state.active===true ? false :true
    })
  }

  render() {
    return (
      <div className='App' style={{color:'orange'}}>
        {this.state.active ? <V25UnmountingChild /> : <h1>Component deleted...</h1>}
        <button onClick={this.changeState}>mount unmount child</button>
      </div>
    )
  }
}



export class V25UnmountingChild extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: true
    }
  }

  changeState = () => {
    console.log('changeState button called...')
    this.setState({
      // checked: false,
      checked: this.state.checked === false ? true : false
    });

  }

  componentWillUnmount() {
    console.log('componentWillUnmount called...')
  }

  render() {
    return (
      <div>
        <h1>it's child class component </h1>
        <h1 style={{color:'red'}}>using toString {this.state.checked.toString()}</h1>
        <h1 style={{color:'blue'}}>using String {String(this.state.checked.toString())}</h1>
        <button onClick={this.changeState}>change state</button>
      </div>
    )
  }
}