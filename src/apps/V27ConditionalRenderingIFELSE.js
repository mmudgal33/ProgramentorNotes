import React from 'react'
import '../App.css';
import V27ConditionalRenderingC1 from './V27ConditionalRenderingC1';
import V27ConditionalRenderingC2 from './V27ConditionalRenderingC2';

//rfce

function V27ConditionalRenderingIFELSE(props) {
    const name = props.name;
    const age = props.age;
    //let data;
    // if (name == 'mohit') { return <V27ConditionalRenderingC1 /> }
    // else { return <V27ConditionalRenderingC2 /> }
    // if (name == 'mohit') { data = <V27ConditionalRenderingC1 /> }
    // else { data = <V27ConditionalRenderingC2 /> }

    return(
        <div className='App'>
            {/* {data} */}
            {/* { name == 'mohit' && <h1>hello mohit</h1>} */}
            {/* { name == 'mohit' ? <h1>hello mohit</h1> : <h1>who are you</h1>} */}
            { name == 'mohit' ? <V27ConditionalRenderingC1/> : <V27ConditionalRenderingC2/>}
        </div>
    )

}

export default V27ConditionalRenderingIFELSE

//ifelse can't be used as jsx, so do that part outside and take data as input
// { name == 'mohit' && <h1>hello mohit</h1>} && it's not and operator in react, if true then print h1 else ignore
// data is element variable to store element






// index.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// //import V27ConditionalRenderingIFELSE from './apps/V27ConditionalRenderingIFELSE';
// import V27ConditionalRenderingIFELSEClass from './apps/V27ConditionalRenderingIFELSEClass';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <>
//   {/* <V27ConditionalRenderingIFELSE name = 'mohit' age = {23}/>
//   <V27ConditionalRenderingIFELSE name = 'mohita' age = {29}/> */}
//   <V27ConditionalRenderingIFELSEClass name = 'mohit' age = {23}/>
//   <V27ConditionalRenderingIFELSEClass name = 'mohita' age = {29}/>
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