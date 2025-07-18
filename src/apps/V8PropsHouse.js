import React from 'react'; /* to run jsx */
// import PropsV8Person from './PropsV8Person';


function V8PropsPerson(props) {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
         <h1>hello {props.name} aged {props.age}</h1>  
         {props.children} 
        </>
    );
} 

function V8PropsHouse() {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
         <V8PropsPerson name="mohit" age={45}/>
        </>
    );
} 

export default V8PropsHouse;



