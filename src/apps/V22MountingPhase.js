import React, { Component } from 'react'

// import V22MountingPhaseChildEx from './V22MountingPhaseChildEx';


export function V22MountingPhasePassingProps() {
  /* props.name="farhan";  cannot be done, prop can't change*/
  return (
      <>
          <V22MountingPhase name='mohita' city='delhi' />
          
      </>
  );
}



export class V22MountingPhase extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"mohit",
       city:"gurugram"
    }
    console.log('V22MountingPhase constructor invoked...')
  }
  
  static getDerivedStateFromProps(props,state){
      console.log('V22MountingPhase getDerivedStateFromProps invoked...')
      console.log(props);
      console.log(state);
      return null
  }

render() {
  console.log('V22MountingPhase render invoked...')
  return (
    <div>
      <h1>parent state {this.state.name}, {this.state.city}</h1>
      <h1>parent props {this.props.name}, {this.props.city}</h1>
      <V22MountingPhaseChildEx name="triveni" city='jammu'/>
    </div>
  )
}

componentDidMount(){
  console.log('V22MountingPhase componentDidMount invoked...')
}
}




export class V22MountingPhaseChildEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"mohini",
         city:'mumbai'
      }
      console.log('V22MountingPhaseChildEx constructor invoked...')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('V22MountingPhaseChildEx getDerivedStateFromProps invoked...')
        console.log(props);
        console.log(state);
        return null
    }

  render() {
    console.log('V22MountingPhaseChildEx render invoked...')
    return (
      <div>
        <h1>child state {this.state.name}, {this.state.city}</h1>
        <h1>child props {this.props.name}, {this.props.city}</h1>
        
      </div>
    )
  }

  componentDidMount(){
    console.log('V22MountingPhaseChildEx componentDidMount invoked...')
  }
}

