import React, { Component } from 'react'

export default class V25UnmountingChild extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount called...')
    }
  render() {
    return (
      <div>
        <h1>it's child class component</h1>
      </div>
    )
  }
}
