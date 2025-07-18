import React from 'react'
import '../App.css';

//map applies a function on all ele of array and return result array saved std here
//destructuring of std return from map function, {std} is must
//key can't pe passed as props, it's created for react, not developer
function V28StudentsAsComponent({std}) {
  return (
    <div className='App'>
      <h1> I am {std.name} and I am {std.age} years old</h1>
    </div>
  )
}

export default V28StudentsAsComponent
