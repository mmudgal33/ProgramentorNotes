import React, { Component } from 'react'
import '../App.css';


export function V24UpdateOtherPassingProps() {
  /* props.name="farhan";  cannot be done, prop can't change*/
  return (
      <>
          <V24UpdateOther name='mohita' />
          
      </>
  );
}



//rcc,rconst,clg
export class V24UpdateOther extends Component {
  constructor(props) {
    super(props)
    console.log('constructor called...')

    this.state = {
      name: 'mohit'
    }
    
  }

  changeState = () => {
    console.log('changeState button called...')
    this.setState({
      name: 'mohini'
    });

  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called');
    console.log(props);
    console.log(state);
    return null

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called...');
    console.log(nextProps);
    console.log(nextState);
    return true; // if shouldComponentUpdate written must pass, if not written default true
    //return false;  
    //if false then no change on getSnapshotBeforeUpdate,componentDidUpdate,render, 
    //so nothing done on dom due to props/state change
  }

  //mohit(prevState), mohini(nextState)
  getSnapshotBeforeUpdate(prevPops, prevState) {
    console.log('getSnapshotBeforeUpdate called...');
    console.log(prevPops);
    console.log(prevState);
    return 'hello from getSnapshotBeforeUpdate called...';
  }

  componentDidUpdate(prevPops, prevState, snapshot) {
    console.log('componentDidUpdate called...');
    console.log(prevPops);
    console.log(prevState);
    console.log(snapshot)

  }

  componentWillUnmount() {
    console.log('componentWillUnmount called...')
  }

  render() {
    console.log('render called...')
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.changeState}>change state</button>
      </div>
    )
  }
}

