// rce, rconst

import React, { Component, useEffect, useState } from 'react'

export class V38ClassStateAndFunctionState1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <>
        <h1>Class Component  &nbsp;  {this.state.counter}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>

        <V38ClassStateAndFunctionState2 />
        <V38ClassStateAndFunctionState3 />
      </>
    )
  }
}




export function V38ClassStateAndFunctionState2() {

  let [count, setCount] = useState(0)

  let increment = () => { setCount(count + 1) }
  let decrement = () => { setCount(count - 1) }

  useEffect(() => { console.log("hello i am effect = " + count) })
  return (
    <div>
      <h1>Functional Component  &nbsp; {count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}


export function V38ClassStateAndFunctionState3() {

  let [count, setCount] = useState(0);
  let [name, setName] = useState('mohit');
  let [check, setCheck] = useState(true);

  let increment = () => { setCount(count + 1) }
  let decrement = () => { setCount(count - 1) }

  let changeName = () => {
    setName(check === true ? 'mohita' : 'mohit');
    setCheck(check === true ? false : true)
  }

  useEffect(() => { console.log("hello i am effect = " + count) }, [count])
  useEffect(() => { console.log("hello : " + name) }, [name])


  return (
    <div>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={changeName}>update name</button>
    </div>
  )
}
