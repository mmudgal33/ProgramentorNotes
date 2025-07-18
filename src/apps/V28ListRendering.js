import React from 'react'
import '../App.css';
import V28StudentsAsComponent from './V28StudentsAsComponent';

function V28ListRendering() {
    //const students = ['mohit','rohit','adil','saurabh'];
    //const age = [3,4,6,5];
    //const result = age.map(num => <h1>{num=num*2}</h1>)
    //map applies a function on all ele of array and return result array saved std here 
    const students = [{
        name : 'mohit',
        age : '23'
    },
    {
        name : 'rohit',
        age : '24'
    },
    {
        name : 'adil',
        age : '26'
    },
    {
        name : 'saurabh',
        age : '25'
    },
]
  return (
    <div className='App'>
      {/* {students.map(std => <h1>{std}</h1>)} */}
      {/* {age.map(num => <h1>{num=num*2}</h1>)} */}
      {/* {result} */}
      {/* {students.map(std => <h1> I am {std.name} and I am {std.age} years old</h1>)} */}
      {students.map(std => <V28StudentsAsComponent std={std}/>)}

    </div>
  )
}

export default V28ListRendering
