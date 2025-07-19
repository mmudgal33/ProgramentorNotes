import React from 'react'; /* to run jsx */
// import PropTypes from 'prop-types';


export function V10FunctionArrowComponent() {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
        <V10Anonymousfunction/>
         <V10Arrowfunction1 name="adil" age={25}/>
         <V10Arrowfunction2 name="mohit" age={45} />
        </>
    );
} 


export function V10Anonymousfunction() {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
         <h2>mohammad adil</h2>
        </>
    );
} 

//const V10Arrowfunction = () => <h1>mohammad adil</h1>;

export const V10Arrowfunction1 = (props) => {
    return (
        <>
            <h2>mohammad {props.name}</h2>
            <h2>learning never ends {props.age}</h2>
        </>

    );
};


//const ArrowfunctionV10 = (props) => <h1>mohammad {props.name} is {props.age} old</h1>;
export const V10Arrowfunction2 = props => <h3>Hi {props.name} you are {props.age} old</h3>;


//use arrow function when single element passed otherwise use normal function component
//use shift alt F please to beautyfy code

// export {V10FunctionArrowComponent,V10Anonymousfunction,V10Arrowfunction1,V10Arrowfunction2}
// export default V10Arrowfunction;

