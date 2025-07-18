import React, { Component } from 'react'
//import './V32CSSModulesStylesheet1.css'; 
import style from './V32CSSModulesStylesheet1.module.css';
//import style1 from './V32CSSModulesStylesheet2.module.css';

export default class V32CSSModulesStylesheet1 extends Component {
    render() {
        return (
            <div>
                <h1 className={style.heading1}>my name is mohini</h1>
                {/*<h1 className={style1.heading1}>my name is mohini</h1>*/}
            </div>
        )
    }
}

// .js not required, .css required
// as V32CSSModulesStylesheet1.css and V32CSSModulesStylesheet1
// are in same folder so './V32CSSModulesStylesheet1.css'

// two css files has same class name heading1, during application
// built each css merge into one and overwrite previous same css class names
// V32CSSModulesStylesheet1.css rename to V32CSSModulesStylesheet1.module.css
// if want to use same external class names.
// or make different class names in every css file in app.

// module used by react internally as 
//<h1 class="V32CSSModulesStylesheet1_heading1__IxDS+">my name is mohini</h1>
// fileName_className__hashCode for css module

// in inline css we cannot use pseudo classes :hover, :active, :visited




//index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// import V32CSSModulesStylesheet1 from './apps/V32CSSModulesStylesheet1';
// import V32CSSModulesStylesheet2 from './apps/V32CSSModulesStylesheet2';



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <>
//   <V32CSSModulesStylesheet1/>
//   <V32CSSModulesStylesheet2/>
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