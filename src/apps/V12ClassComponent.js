import React from 'react'; /* to run jsx */

//class component
export class V12ClassComponent extends React.Component {
    render() {
        return (
            <h1>Mohammad Adil</h1>
        )
    }
}

//function component
export function PropsV8Person(props) {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
            <h1>hello {props.name}</h1>
        </>
    );
}

//export default V12ClassComponent;



// import React, {Component} from 'react'; /* to run jsx */

// export default class V12ClassComponent extends Component{
//     render(){
//         return(
//             <>
//             <h1>Mohammad Adil</h1>
//             </>

//         )
//     }
// } 


//index.js
//import V12ClassComponent, {PropsV8Person} from './apps/V12ClassComponent'; 
//import AliasNameExportDefault, {PropsV8Person} from './apps/V12ClassComponent'; 
//import {V12ClassComponent,PropsV8Person} from './apps/V12ClassComponent'; 

{/* <>
    <V12ClassComponent />
    <PropsV8Person name="mohit mudgal" />
</> */}