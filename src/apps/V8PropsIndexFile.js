import React from 'react'; /* to run jsx ctrl+H for find and replace*/
// import V8Props from './V8Props';

let a = "amir";

function V8Props(props) {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
         <h1>hello {props.name} aged {props.age}</h1>  
         {props.children} 
        </>
    );
} 

function V8PropsIndexFile(props) {
    return (
        <>
            
            <V8Props name="mohit" age="31" />
            <V8Props name={a} age="27" />

            <V8Props name="adil" age="29">
                <p>children element added</p>
            </V8Props>
            <V8Props name="mohit" age="31">
                <button type="button" value="click">click </button>
            </V8Props>
            <V8Props name={a} age="27">
                <h3>children element 2</h3>
            </V8Props>
        </>
    );
}

export default V8PropsIndexFile;