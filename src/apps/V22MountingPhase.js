import React, { Component } from 'react'
import V22MountingPhaseChildEx from './V22MountingPhaseChildEx';

export default class V22MountingPhase extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"mohit"
      }
      console.log('constructor invoked...')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps invoked...')
        console.log(props);
        console.log(state);
        return null
    }

  render() {
    console.log('render invoked...')
    return (
      <div>
        <h1>name {this.state.name} ,city {this.props.city}</h1>
        <V22MountingPhaseChildEx city='mumbai'/>
      </div>
    )
  }

  componentDidMount(){
    console.log('componentDidMount invoked...')
  }
}
