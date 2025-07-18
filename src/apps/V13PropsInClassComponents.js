import React, { Component } from 'react'

export default class V13PropsInClassComponents extends Component {
  render() {
    //this.props.name='adil';  can't be done
    return (
      <div>
        <h1>Hello {this.props.name}, aged {this.props.age}</h1>
        {this.props.children}
        {/* <V13PropsInClassComponents2 Institute="learning never ends" Students={23}/> */}
      </div>
    )
  }
}



export class V13PropsInClassComponents2 extends Component {
  render() {
    return (
      <div>
        <h1> Institute {this.props.Institute}, students {this.props.Students}</h1>
      </div>
    )
  }
}


//export default V13PropsInClassComponents;










//index.js


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V13PropsInClassComponents,{V13PropsInClassComponents2} from './apps/V13PropsInClassComponents'; 



// const root = ReactDOM.createRoot(document.getElementById('root'));
// const names=['Amit','Zain','Kumar','Ali']
// const age=[23,24,35,26]
// root.render(
//   <>
//   <V13PropsInClassComponents2 Institute="learning never ends" Students={23}/>
//   <V13PropsInClassComponents name="mohit mudgal" age={23}/>
//   <V13PropsInClassComponents name="mohita mudgal" age={24}/>
//   <V13PropsInClassComponents name={names[1]} age={age[1]}/>
  
//   <V13PropsInClassComponents>name={names[2]} age={age[2]} 
//   <h2>child no :1</h2>
//   </V13PropsInClassComponents>
//   <V13PropsInClassComponents>name={names[3]} age={age[3]} 
//   <button type='button'>submit</button>
//   </V13PropsInClassComponents>
//   <V13PropsInClassComponents>name={names[0]} age={age[0]} 
//   <ol>
//     <li>rohit</li>
//     <li>mohit</li>
//     <li>radha</li>
//   </ol>
//   </V13PropsInClassComponents>
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