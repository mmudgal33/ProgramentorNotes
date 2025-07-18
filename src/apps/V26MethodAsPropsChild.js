// import React, { Component } from 'react'
// import '../App.css';

// export default class V26MethodAsPropsChild extends Component {
//   render() {
//     return (
//       <div className='App'>
//         {/* <button onClick={this.props.callMethod}>click to Call parent method</button> */}
//         <button onClick={ () => this.props.callMethod('mohit','mohini')}>click to Call parent method</button>
//       </div>
//     )
//   }
// }


//rfc
import '../App.css';
import React from 'react'

export default function V26MethodAsPropsChild(props) {
  return (
    <div className='App'>
      <button onClick={ () => props.callMethod('mohit','mohini')}>click to Call parent method</button>
    </div>
  )
}
// this.props.callMethod('mohit','mohini') remove this in functional component