//import React from 'react'

import React, { Component } from 'react'


export default class V17DestructuringPropsAndState extends Component {
    constructor() {
        super()
        this.state = {
            name: "Mohit",
            age: 31
        }
    }
    render() {
        const { name, age } = this.state
        return (
            <div>
                <h1>{name} {age}</h1>
            </div>
        )
    }
}




// export default class V17DestructuringPropsAndState extends Component {
//     render() {
//         const { name, age } = this.props //props var name can't be change
//         return (
//             <div>
//                 <h1>{name} {age}</h1>
//             </div>
//         )
//     }
// }


// function V17DestructuringPropsAndState({ props }) {
//     const { name, age } = props //props var name can't be change
//     return (
//         <div>
//             <h1>{name} {age}</h1>
//         </div>
//     )
// }


// function V17DestructuringPropsAndState(props) {
//   return (
//     <div>
//       <h1>{props.name} {props.age}</h1>
//     </div>
//   )
// }

// function V17DestructuringPropsAndState({name,age}) {
//   return (
//     <div>
//       <h1>{name} {age}</h1>
//     </div>
//   )
// }

//export default V17DestructuringPropsAndState









//index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V17DestructuringPropsAndState from './apps/V17DestructuringPropsAndState'; 



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <>
//   <V17DestructuringPropsAndState name="Mohini" age={30}/>
//   </>
// );

// /* root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ); */

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// /* import FirstApp from './apps/FirstApp';
// <FirstApp/>  */







