import React, { Component } from 'react'
import './V31CSSStyleSheetComponent.css';  

// .js not required but .css required
// class is keyword in react, so className used, myfont is css class

export default class V31CSSStyleSheetComponent extends Component {
  render() {
    let x = this.props.Check ? 'myfont' : 'myfont2';
    return (
      <div>
        {/* <h1 className='myfont myfont2'>hello, i am mohit</h1> */}
        {/* <h1 className={x}>hello, i am mohit</h1> */}
        <h1 className={`${x} myfont3`}>hello, i am mohit</h1>
      </div>
    )
  }
}

// bapticks just above tab present {`${x} myfont3`}


// index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V31CSSStyleSheetComponent from './apps/V31CSSStyleSheetComponent';



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <>
//   <V31CSSStyleSheetComponent Check={true}/>
//   <V31CSSStyleSheetComponent Check={false}/>
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