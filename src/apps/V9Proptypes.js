import React from 'react'; /* to run jsx */
import PropTypes from 'prop-types';

const friends = ['Amit', 'Zain', 'Kumar', 'Ali']


// const age=[23,24,35,26]

export function V9ProptypesPropsPassing() {
    
    return (
        <>
            <V9Proptypes name="Adil" age={23} isMarried="False" arr={friends} />
            <V9Proptypes isMarried="False" arr={friends} />
        </>
    );
}


function V9Proptypes(props) {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
            <h4>hello {props.name} old {props.age}</h4>

            <h4>output1 {props.isMarried.toString()}</h4>
            {/* <h4>output2 {String(props.isMarried)}</h4> */}
            <h4>array {props.arr}</h4>
            {/* <h4>array {props.arr[1]}</h4> */}
            {/* {props.children}  */}

        </>
    );
}

V9Proptypes.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    arr: PropTypes.array
}

V9Proptypes.defaultProps = {
    name: 'Triveni Kaul',
    age: 18
}

export default V9Proptypes;




// const arr = ['One', 'Two', 'Three', 'Four'];
// export default function App() {
//     const for_loop = []
//     for (let i = 0; i < arr.length; i++) {
//         for_loop.push(<li>{arr[i]}</li>);
//     };
//     return (
//         <div>
//             <center><h1>Hello Ninja!</h1></center>
//             {for_loop}
//         </div>
//     )
// }