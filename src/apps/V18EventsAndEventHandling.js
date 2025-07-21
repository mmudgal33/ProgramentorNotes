import '../App.css';
import React, { Component } from 'react'


export default class V18EventsAndEventHandling1 extends Component {
    HelloFunction() {
        // alert("Hello Click Person");
        console.log("Hello Click Person")
    }
    render() {
        return (
            <div className="App">
                <input type="button" value="class component EventHandling" onClick={this.HelloFunction} />
            </div>
        )
    }
}


export function V18EventsAndEventHandling2() {
    function HelloFunction() {
        // alert("Hello Click Person");
        console.log("Hello Click Person")

    }
    return (
        <div className="App">
            <input type="button" value="function component EventHandling" onClick={HelloFunction} />
        </div>
    )
}


export function V18EventsAndEventHandlingPassingProps() {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
            <V18EventsAndEventHandling1 />
            <V18EventsAndEventHandling2 />
            <V18EventsAndEventHandling3 name="sakshi" />
            <V18EventsAndEventHandling4 name="rohit" />
            <V18EventsAndEventHandling5 name="mohit" />


        </>
    );
}



export class V18EventsAndEventHandling3 extends Component {

    render() {
        // function inside render don't require this keyword HelloFunction v/s this.HelloFunction
        // props and state came fron outside of render, they always require this keyword
        const HelloFunction = (name) => {
            // alert("Hello Click Person " + name);
            console.log("Hello Click Person " + name);

        }
        return (
            <div className="App">
                <input type="button" value="class inside render props EventHandling" onClick={() => HelloFunction(this.props.name)} />
            </div>
        )
    }
}


export class V18EventsAndEventHandling4 extends Component {
    HelloFunction = (name) => {
        // alert("Hello Click Person " + name);
        console.log("Hello Click Person " + name);

    }
    render() {

        return (
            <div className="App">
                <input type="button" value="class outside render props EventHandling" onClick={() => this.HelloFunction(this.props.name)} />
            </div>
        )
    }
}




function V18EventsAndEventHandling5(props) {
    const HelloFunction = (name) => {
        // alert("Hello Click Person " + name);
        console.log("Hello Click Person " + name);

    }
    return (
        <div className="App">
            <input type="button" value="function component EventHandling" onClick={() => HelloFunction(props.name)} />
        </div>
    )
}

 