import React, { Component } from 'react'
import '../App.css';
// import V26MethodAsPropsChild from './V26MethodAsPropsChild'; 
//rfc


 

export class V26MethodAsPropsParent extends Component {
    // parentMethod = () => {
    //     alert('hello from parent')
    // }
    parentMethod = (childName,secondName) => {
        // alert('hello from parent ' + childName+' '+ secondName)
        alert(`hello from parent name ${childName} and child name ${secondName}`)

        //template literals bapticks, above tab button
    }
  render() {
    return (
      <>
        <V26MethodAsPropsChild1 callMethod = {this.parentMethod}/>
        <V26MethodAsPropsChild2 callMethod = {this.parentMethod}/>
      </>
    )
  }
}


export class V26MethodAsPropsChild1 extends Component {
  render() {
    return (
      <div className='App'>
        {/* <button onClick={this.props.callMethod}>click to Call parent method</button> */}
        <button onClick={ () => this.props.callMethod('mohit','mohini')}>click to Call parent method</button>
      </div>
    )
  }
}


export function V26MethodAsPropsChild2(props) {
  return (
    <div className='App'>
      <button onClick={ () => props.callMethod('mohit','mohini')}>click to Call parent method</button>
    </div>
  )
}
// this.props.callMethod('mohit','mohini') remove this in functional component