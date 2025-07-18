import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class V14PropTypesinClassComponents extends Component {
    render() {
        return (
            <div>
                <h1>this is {this.props.name} age {this.props.age}</h1>
                <h4>output1 {this.props.isMarried.toString()}</h4>
                <h4>output2 {String(this.props.isMarried)}</h4>
                <h4>array {this.props.arr}</h4>
                <h4>array {this.props.arr[1]}</h4>
            </div>
        )
    }
}


V14PropTypesinClassComponents.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    arr: PropTypes.array
}

V14PropTypesinClassComponents.defaultProps = {
    name: 'Learning never ends',
    age: 18
}













//index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V14PropTypesinClassComponents from './apps/V14PropTypesinClassComponents'; 



// const root = ReactDOM.createRoot(document.getElementById('root'));
// let friends=['rohit','mohit','radha']
// root.render(
//   <>
//   <V14PropTypesinClassComponents name="mohit" age="25" isMarried='True' arr={friends}/>
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