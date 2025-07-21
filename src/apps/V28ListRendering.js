import React from 'react'
import '../App.css';
// import V28StudentsAsComponent from './V28StudentsAsComponent';

export function V28ListRendering() {
    const friends = ['mohit','rohit','adil','saurabh'];
    const numbers = [3,4,6,5];
    const result = numbers.map(num => <h1>{num=num*2}</h1>)
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
      
      {students.map(std => <h1 style={{color:'green'}}> I am {std.name} and I am {std.age} years old</h1>)}
      {students.map(std => <V28StudentsAsComponent std={std}/>)}
      {friends.map(std => <h1 style={{color:'orange'}}>{std}</h1>)}
      {numbers.map(num => <h1 style={{color:'red'}}>{num=num*2}</h1>)}
      <p style={{color:'yellow'}}>{result}</p>

    </div>
  )
}






//map applies a function on all ele of array and return result array saved std here
//destructuring of std return from map function, {std} is must
//key can't pe passed as props, it's created for react, not developer
export function V28StudentsAsComponent({std}) {
  return (
    <div className='App'>
      <h1 style={{color:'pink'}}> I am {std.name} and I am {std.age} years old</h1>
    </div>
  )
}

