import React, { Component } from 'react';
import V26MethodAsPropsChild from './V26MethodAsPropsChild'; 
 

export default class V26MethodAsPropsParent extends Component {
    // parentMethod = () => {
    //     alert('hello from parent')
    // }
    parentMethod = (childName,secondName) => {
        alert('hello from parent ' + childName+' '+ secondName)
        alert(`hello from parent name ${childName} and child name ${secondName}`)

        //template literals bapticks, above tab button
    }
  render() {
    return (
      <div>
        <V26MethodAsPropsChild callMethod = {this.parentMethod}/>
      </div>
    )
  }
}
