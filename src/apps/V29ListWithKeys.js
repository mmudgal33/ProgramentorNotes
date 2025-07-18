import React from 'react'
import '../App.css';
import V28StudentsAsComponent from './V28StudentsAsComponent';

function V29ListWithKeys() {
    //const students = ['mohit','rohit','adil','saurabh'];
    //let StudentsNames = students.map(std => <li>{std}</li>);
    //let StudentsNames = students.map((std,index) => <li key={index}>{std}</li>);
    // during update react can check keys, and fast update, otherwise it's not fast, render efficiently internally
    
    //const age = [3,4,6,5];
    //const result = age.map(num => <h1>{num=num*2}</h1>)
    //map applies a function on all ele of array and return result array saved std here 
    const students = [{
        id: 1,
        name : 'mohit',
        age : '23'
    },
    {
        id: 2,
        name : 'rohit',
        age : '24'
    },
    {
        id: 3,
        name : 'adil',
        age : '26'
    },
    {
        id: 4,
        name : 'saurabh',
        age : '25'
    },
]
  return (
    <div className='App'>
      {/* {<ul>{StudentsNames}</ul>} */}
      {students.map(std => <V28StudentsAsComponent key={std.id} std={std}/>)}
      {/* {students.map(std => <h1>{std}</h1>)} */}
      {/* {age.map(num => <h1>{num=num*2}</h1>)} */}
      {/* {result} */}
      {/* {students.map(std => <h1> I am {std.name} and I am {std.age} years old</h1>)} */}
      {/* {students.map(std => <V28StudentsAsComponent std={std}/>)} */}

    </div>
  )
}

export default V29ListWithKeys
