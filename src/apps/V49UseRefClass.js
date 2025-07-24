// rcc
// useRef means reference
import React, { Component, createRef } from 'react'

export class V49UseRefClass extends Component {
    // rconst
    constructor(props) {
      super(props)
      this.myRef = createRef();

      this.nameRef = createRef();
      this.ageRef = createRef();
      this.emailRef = createRef();

      this.state = {}
    }

    componentDidMount(){
        console.log(this.myRef);
        console.log(this.myRef.current.innerHTML);
        console.log(this.nameRef);
        console.log(this.ageRef);
        this.nameRef.current.focus();
    }

    handleFormSubmit = (e) => {
      e.preventDefault();
      // onChange={handleChange} not required as this.nameRef.current.value  does that
      console.log(this.nameRef.current.value);
      console.log(' age = ',this.ageRef.current.value);
      let email = document.getElementById('email').value;
      console.log('email = ', email);
    }

    handleHeading = () => {
        this.myRef.current.align = 'right';
        // this.myRef.current.hidden = true;
        this.myRef.current.style.color = 'red';
        this.myRef.current.style.backgroundColor = 'yellow';
    }

  render() {
    return (
      <>
        <h1 ref={this.myRef}> use reference hook binding</h1>
        <button onClick={this.handleHeading}>click</button><hr />

        <h1 style={{ color: 'red' }}>V49UseRefHook</h1><hr />
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="name">Enter Name:</label>&nbsp;
                <input type="text" id='name' placeholder='name' name='name' value='adil' ref={this.nameRef}/><br />

                <label htmlFor="age">Enter Age:</label>&nbsp;
                <input type="text" id='age' placeholder='age' name='age' value={29} ref={this.ageRef}/><br />

                <label htmlFor="email">Enter Email:</label>&nbsp;
                <input type="text" id='email' placeholder='email' name='email' value='mmudgal33@gmail.com' ref={this.emailRef}/><br />


                <input type="submit" value="submit" />
            </form>
      </>
    )
  }
}




