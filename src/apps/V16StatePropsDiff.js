import React, { Component } from 'react'

export default class V16StatePropsDiff extends Component {
    state = {
        //name: "Mohit",
        name: this.props.name,
        surname: "Mudgal",
        age: 31
        //name: 1
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //name: "Mohit",
    //         name: this.props.name,
    //         surname: "Mudgal",
    //         age: 31
    //         //name: 1
    //     }
    // }

    changeName() {
        this.setState({
            name: "Mohita",
            surname: "Mudgal",
            age: 30
            //name: this.state.name + 1
        })

    }

    render() {
        return (
            <div>
                <h1>name {this.state.name} surname {this.state.surname} age {this.state.age}</h1>
                <input type="button" value="click" onClick={() => this.changeName()} />
            </div>
        )
    }
}




//index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V16StatePropsDiff from './apps/V16StatePropsDiff'; 



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <>
//   <V16StatePropsDiff name="Mohini"/>
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