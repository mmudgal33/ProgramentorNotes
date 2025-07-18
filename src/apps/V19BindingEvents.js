import '../App.css';
import React, { Component } from 'react'

export default class V19BindingEvents extends Component {
    constructor() {
        super();
        //this.HandleEvent=this.HandleEvent.bind(this);   //binding event is important METHOD 1 (good for performance)
        this.state = {
            name: "mohit"
        }
    }
    HandleEvent() {
        //console.log("Hello", this)
        this.setState({
            name: "mohini"
        })
    }
    // HandleEvent = () => {
    //     //console.log("Hello", this)
    //     this.setState({
    //         name: "mohini"
    //     })
    // }
    render() {
        return (
            <div className="App">
                <h1>{this.state.name}</h1>
                {/* <button type="button" onClick={this.HandleEvent}>click</button> */}
                {/* <button type="button" onClick={this.HandleEvent.bind(this)}>click</button> */}
                {/* <button type="button" onClick={this.HandleEvent}>click</button> */}
                <button type="button" onClick={()=>this.HandleEvent()}>click</button>
            </div>
        )
    }
}


// HandleEvent() {
//     //console.log("Hello", this)
//     this.setState({
//         name: "mohini"
//     })
// }
//this.HandleEvent=this.HandleEvent.bind(this);   //binding event is important METHOD 1 (good for performance)

// HandleEvent() {
//     //console.log("Hello", this)
//     this.setState({
//         name: "mohini"
//     })
// }
// <button type="button" onClick={this.HandleEvent.bind(this)}>click</button> METHOD 2

// METHOD 3 ARROW FUNCTION
// HandleEvent = () => {
//     //console.log("Hello", this)
//     this.setState({
//         name: "mohini"
//     })
// }
// <button type="button" onClick={this.HandleEvent}>click</button>


//METHOD 4 BIND ARROW FUNCTION CALL TO REGULAR FUNCTION 
// HandleEvent() {
//     //console.log("Hello", this)
//     this.setState({
//         name: "mohini"
//     })
// }
// <button type="button" onClick={()=>this.HandleEvent()}>click</button>