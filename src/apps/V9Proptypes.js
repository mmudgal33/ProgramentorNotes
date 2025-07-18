import React from 'react'; /* to run jsx */
import PropTypes from 'prop-types';


function V9Proptypes(props) {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
         <h4>hello {props.name}</h4> 
         <h4>old {props.age}</h4> 
         <h4>output1 {props.isMarried.toString()}</h4>
         <h4>output2 {String(props.isMarried)}</h4> 
         <h4>array {props.arr}</h4>
         <h4>array {props.arr[1]}</h4>
         {/* {props.children}  */}
        </>
    );
} 

V9Proptypes.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    isMarried:PropTypes.bool,
    arr:PropTypes.array
}

V9Proptypes.defaultProps={
    name:'Learning never ends',
    age:18
}

export default V9Proptypes;

// <ProptypesV9 name="Adil" age={23} isMarried="False" arr={friends}/>
// <ProptypesV9 isMarried="False" arr={friends}/>