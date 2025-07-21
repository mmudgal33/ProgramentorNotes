import React, { Component } from 'react'
import '../App.css';
// import V27ConditionalRenderingC1 from './V27ConditionalRenderingC1';
// import V27ConditionalRenderingC2 from './V27ConditionalRenderingC2';
//rcc,rconst

export function V26MethodAsPropsChildPassingProps() {
  /* props.name="farhan";  cannot be done, prop can't change*/
  return (
      <>
          <V27ConditionalRenderingIFELSEClass name='mohit'  />
          
      </>
  );
}



export class V27ConditionalRenderingIFELSEClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name1 : this.props.name,
         name : 'mohit'

      }
    }

    changeState = () => {
      this.setState({
        // active: false
        name: this.state.name==='mohita' ? 'mohit' : 'mohita'
        
      })
    }
    
  render() {

    const name = this.state.name;
    
    //let data;
    // if (name == 'mohit') { return <V27ConditionalRenderingC1 /> }
    // else { return <V27ConditionalRenderingC2 /> }
    // if (name == 'mohit') { data = <V27ConditionalRenderingC1 /> }
    // else { data = <V27ConditionalRenderingC2 /> }
    
    return (
        <div className='App'>
        {/* {data} */}
        {/* { name == 'mohit' && <h1>hello mohit</h1>} */}
        {/* { name == 'mohit' ? <h1>hello mohit</h1> : <h1>who are you</h1>} */}
        { name === 'mohit' ? <V27ConditionalRenderingC1/> : <V27ConditionalRenderingC2/>}
        <button onClick={this.changeState}>change state</button>
    </div>
    )
  }
}

//ifelse can't be used as jsx, so do that part outside and take data as input
// { name == 'mohit' && <h1>hello mohit</h1>} && it's not and operator in react, if true then print h1 else ignore
// data is element variable to store element





export function V27ConditionalRenderingC1() {
  return (
    <div>
      <h1 style={{color:'red'}}>hi mohit</h1>
    </div>
  )
}


export function V27ConditionalRenderingC2() {
  return (
    <div>
      <h1 style={{color:'blue'}}>hi mohita</h1>
    </div>
  )
}

