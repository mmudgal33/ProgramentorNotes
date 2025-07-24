// functional component useRef used. if update code in useEffect then infinite loop happens
// useEffect update code, calls useState, which rerender, useEffect called and update again, useState call again
// useEffect runs with mount, update, unmount.
// no callback ref in functional component.
// applications of useRef in special situations where it is used 
// 1) useState + useEffect infinite loop   2) reference to particular element 

import React, { useRef, useEffect } from 'react'

export function V52UseRefHookCallbackFunction() {

  const newRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();


  useEffect(() => {
    console.log(newRef);
    console.log(nameRef, ageRef, emailRef );
    console.log(newRef.current.innerHTML);
    console.log(' name = ',nameRef.current.value);
    console.log(' age = ',ageRef.current.value);
    console.log(' email = ',emailRef.current.value);
    nameRef.current.focus();
    newRef.current.style.color = 'red';
    newRef.current.style.backgroundColor = 'yellow';
  })

  const handleHeading = () => {
    newRef.current.align = 'right';
    // myRef.current.hidden = true;
    newRef.current.style.color = 'red';
    newRef.current.style.backgroundColor = 'yellow';
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // onChange={handleChange} not required as this.nameRef.current.value  does that
    console.log('name =',nameRef.current.value);
    console.log(' age = ',ageRef.current.value);
    let email = document.getElementById('email').value;
    console.log('email = ', email);
  }


  return (
    <>
      <h1 ref={newRef}>functional Component useRef </h1>
      <button onClick={handleHeading}> click </button><hr />

      <h1 style={{ color: 'green' }}>V52UseRefHookCallbackFunction</h1><hr />
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Enter Name:</label>&nbsp;
                <input type="text" id='name' placeholder='name' name='name' ref={nameRef}/><br />

                <label htmlFor="age">Enter Age:</label>&nbsp;
                <input type="text" id='age' placeholder='age' name='age' ref={ageRef}/><br />

                <label htmlFor="email">Enter Email:</label>&nbsp;
                <input type="text" id='email' placeholder='email' name='email' ref={emailRef}/><br />


                <input type="submit" value="submit" />
            </form>
    </>
  )
}