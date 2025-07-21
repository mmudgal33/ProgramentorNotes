import React from 'react'
import '../App.css';
// import V28StudentsAsComponent from './V28StudentsAsComponent';

export function V29ListWithKeys() {
  const friends = ['mohit', 'rohit', 'adil', 'saurabh'];
  let StudentsNames = friends.map(std => <li>{std}</li>);
  //let StudentsNames = students.map((std,index) => <li key={index}>{std}</li>);
  // during update react can check keys, and fast update, otherwise it's not fast, render efficiently internally

  const numbers = [3, 4, 6, 5];
  const result = numbers.map(num => <h1>{num = num * 2}</h1>)
  //map applies a function on all ele of array and return result array saved std here 
  const students = [{
    id: 4,
    name: 'mohit',
    age: '23'
  },
  {
    id: 2,
    name: 'rohit',
    age: '24'
  },
  {
    id: 3,
    name: 'adil',
    age: '26'
  },
  {
    id: 1,
    name: 'saurabh',
    age: '25'
  },
  ]
  return (
    <div className='App'>
      <V28StudentsAsComponent2 students={students} />

      {students.map(std => <h1 style={{ color: 'orange' }} key={std.id}> I am {std.name} and I am {std.age} years old, id {std.id}</h1>)}
      {students.map((std) => <V28StudentsAsComponent std={std} />)}
      {students.map(std => <V28StudentsAsComponent std={std} />)}

      {friends.map(std => <h1 style={{ color: 'green' }}>{std}</h1>)}
      {numbers.map(num => <h1 style={{ color: 'yellow' }}>{num = num * 2}</h1>)}
      {<ul style={{ color: 'red' }}>{StudentsNames}</ul>}
      <p style={{ color: 'blue' }}>{result}</p>


    </div>
  )
}






//map applies a function on all ele of array and return result array saved std here
//destructuring of std return from map function, {std} is must
//key can't pe passed as props, it's created for react, not developer
export function V28StudentsAsComponent({ std }) {
  return (
    <div className='App' >
      <h1 style={{ color: 'violet' }} key={std.id}> I am {std.name} and I am {std.age} years old, id {std.id}</h1>
    </div>
  )
}










//map applies a function on all ele of array and return result array saved std here
//destructuring of std return from map function, {std} is must
//key can't pe passed as props, it's created for react, not developer
export function V28StudentsAsComponent2(props) {
  const students = props.students
  return (
    <>
      {/* <h1 style={{ color: 'violet' }} > I am {std.name} and I am {std.age} years old, id {std.id}</h1> */}
      {/* {students.map(std => <h1 style={{ color: 'orange' }} key={std.id}> I am {std.name} and I am {std.age} years old, id {std.id}</h1>)} */}

      <div  style={{ color: 'gold' }}>
        {students.map((student,id) => (

          <div key={student.id}>
            <p>
              students Id: <span>{student.id}</span>
            </p>
            <p>
              student Name: <span>{student.name}</span>
            </p>
            <p>
              students Age: <span>{student.age}</span>
            </p>

          </div>

        ))}
      </div>
    </>
  )
}







