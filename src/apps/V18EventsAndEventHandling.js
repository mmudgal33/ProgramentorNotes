import '../App.css';
import React, { Component } from 'react'

// export default class V18EventsAndEventHandling extends Component {
    
//     render() {
//         const HelloFunction = (name) => {
//             alert("Hello Click Person " + name);

//         }
//         return (
//             <div className="App">
//                 <input type="button" value="click" onClick={() => HelloFunction(this.props.name)} />
//             </div>
//         )
//     }
// }

export default class V18EventsAndEventHandling extends Component {
    HelloFunction = (name) => {
        alert("Hello Click Person " + name);

    }
    render() {
        
        return (
            <div className="App">
                <input type="button" value="click" onClick={() => this.HelloFunction(this.props.name)} />
            </div>
        )
    }
}






// import React from 'react';
// import '../App.css'

// function V18EventsAndEventHandling(props) {
//     const HelloFunction = (name) => {
//         alert("Hello Click Person "+ name);

//     }
//     return (
//         <div className="App">
//             <input type="button" value="click" onClick={() => HelloFunction(props.name)} />
//         </div>
//     )
// }

// export default V18EventsAndEventHandling




// import '../App.css';
// import React, { Component } from 'react'

// export default class V18EventsAndEventHandling extends Component {
//     HelloFunction() {
//         alert("Hello Click Person");
//     }
//     render() {
//         return (
//             <div className="App">
//                 <input type="button" value="click" onClick={this.HelloFunction} />
//             </div>
//         )
//     }
// }




// import React from 'react';
// import '../App.css'

// function V18EventsAndEventHandling() {
//     function HelloFunction() {
//         alert("Hello Click Person");

//     }
//     return (
//         <div className="App">
//             <input type="button" value="click" onClick={HelloFunction} />
//         </div>
//     )
// }

// export default V18EventsAndEventHandling




//index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V18EventsAndEventHandling from './apps/V18EventsAndEventHandling'; 



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <>
//   <V18EventsAndEventHandling name="mohit"/>
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