import React, { Component } from 'react'

export default class V22MountingPhaseChildEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"mohini"
      }
      console.log('Mounting2 constructor invoked...')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Mounting2 getDerivedStateFromProps invoked...')
        console.log(props);
        console.log(state);
        return null
    }

  render() {
    console.log('Mounting2 render invoked...')
    return (
      <div>
        <h1>name {this.state.name} ,city {this.props.city}</h1>
        
      </div>
    )
  }

  componentDidMount(){
    console.log('Mounting2 componentDidMount invoked...')
  }
}
