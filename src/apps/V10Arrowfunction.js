import React from 'react'; /* to run jsx */
// import PropTypes from 'prop-types';


// function V10Arrowfunction(props) {
//     /* props.name="farhan";  cannot be done, prop can't change*/
//     return (
//         <>
//          <h1>mohammad adil</h1>
//         </>
//     );
// } 

//const V10Arrowfunction = () => <h1>mohammad adil</h1>;

// const ArrowfunctionV10 = (props) => {
//     return (
//         <>
//             <h1>mohammad {props.name}</h1>
//             <h2>learning never ends {props.age}</h2>
//         </>

//     );
// };


//const ArrowfunctionV10 = (props) => <h1>mohammad {props.name} is {props.age} old</h1>;
const V10Arrowfunction = props => <h1>Hi {props.name} you are {props.age} old</h1>;


//use arrow function when single element passed otherwise use normal function component
//use shift alt F please to beautyfy code

export default V10Arrowfunction;

