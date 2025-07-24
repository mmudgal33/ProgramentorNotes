// rcc
// useRef means reference
// callback reference hook createRef and current not used
// ref used in some situations only, like accessing particular element and change it directly to DOM
import React, { Component, createRef } from 'react'

export class V51UseRefHookCallbackFunction extends Component {
  // rconst
  constructor(props) {
    super(props)
    this.myRef = null;
    this.setMyRef = (element) => {
      this.myRef = element;
    }

    this.nameRef = createRef();
    this.ageRef = createRef();
    this.emailRef = createRef();

    this.state = {
      name:'',
      age:'',
      email:''
    }

    

    this.onChange = this.onChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onChange(e) {
    this.setState ({
      [e.target.name] : e.target.value
    });

}



  componentDidMount() {

    this.myRef.style.color = 'red';
    this.myRef.style.backgroundColor = 'yellow';

  }


  

  handleFormSubmit = (e) => {
    e.preventDefault();
    // onChange={handleChange} not required as this.nameRef.current.value  does that
    

    console.log('name=',this.nameRef.current.value);
    console.log('age=',this.ageRef.current.value);
    // console.log('email=',this.emailRef.current.value);
    // this.myRef.focus();
    
    
    let email = document.getElementById('email').value;
    console.log('email = ', email);
  }

  handleHeading = () => {
    console.log('myRef =',this.myRef);
    console.log('myRef innerHTML =',this.myRef.innerHTML);
    
    this.myRef.align = 'right';
    // this.myRef.current.hidden = true;
    this.myRef.style.color = 'red';
    this.myRef.style.backgroundColor = 'yellow';
  }



  render() {
    return (
      <>
        <h1 ref={this.setMyRef}> use reference hook binding</h1>
        <button onClick={this.handleHeading}>click</button><hr />

        <h1 style={{ color: 'red' }}>V49UseRefHook</h1><hr />
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="name">Enter Name:</label>&nbsp;
          <input type="text" id='name' placeholder='name' name='name' value={this.state.name} onChange={this.onChange} ref={this.nameRef} /><br />

          <label htmlFor="age">Enter Age:</label>&nbsp;
          <input type="text" id='age' placeholder='age' name='age' value={this.state.age} onChange={this.onChange} ref={this.ageRef} /><br />

          <label htmlFor="email">Enter Email:</label>&nbsp;
          <input type="text" id='email' placeholder='email' name='email' value={this.state.email} onChange={this.onChange} ref={this.emailyRef} /><br />


          <input type="submit" value="submit" />
        </form>
      </>
    )
  }
}







