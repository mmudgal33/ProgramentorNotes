import '../App.css';
import React, { Component } from 'react'


export function V19BindingEventsPassingProps() {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
            <V19BindingEvents1 />
            <V19BindingEvents2 />
            <V19BindingEvents3 />
            <V19BindingEvents4 />
            
        </>
    );
}







export class V19BindingEvents1 extends Component {
    constructor() {
        super();
        
        this.state = {
            name: "mohit"
        }

        this.HandleEvent=this.HandleEvent.bind(this);   //binding event is important METHOD 1 (good for performance)
    }
    
    HandleEvent() {
        //console.log("Hello", this)
        this.setState({
            name: "mohita"
        })
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.name}</h1>
                <button type="button" onClick={this.HandleEvent}>click</button>
                
            </div>
        )
    }
}




export class V19BindingEvents2 extends Component {
    constructor() {
        super();
        
        this.state = {
            name: "mohit"
        }

        //this.HandleEvent=this.HandleEvent.bind(this);   //binding event is important METHOD 1 (good for performance)
    }
    HandleEvent() {
        //console.log("Hello", this)
        this.setState({
            name: "mohini"
        })
    }
    
    render() {
        return (
            <div className="App">
                <h1>{this.state.name}</h1>
                <button type="button" onClick={this.HandleEvent.bind(this)}>click</button>
                
            </div>
        )
    }
}





export class V19BindingEvents3 extends Component {
    constructor() {
        super();
        
        this.state = {
            name: "mohit"
        }

        //this.HandleEvent=this.HandleEvent.bind(this);   //binding event is important METHOD 1 (good for performance)
    }
    HandleEvent() {
        //console.log("Hello", this)
        this.setState({
            name: "mohini"
        })
    }
    
    render() {
        return (
            <div className="App">
                <h1>{this.state.name}</h1>
                
                <button type="button" value='Arrow Function with Binding' onClick={()=>this.HandleEvent()}>click</button>
            </div>
        )
    }
}





export class V19BindingEvents4 extends Component {
    constructor() {
        super();
        
        this.state = {
            name: "mohit"
        }

        //this.HandleEvent=this.HandleEvent.bind(this);   //binding event is important METHOD 1 (good for performance)
    }
    
    HandleEvent = () => {
        //console.log("Hello", this)
        this.setState({
            name: "mohini"
        })
    }
    
    render() {
        return (
            <div className="App">
                <h1>{this.state.name}</h1>
                <button type="button" onClick={this.HandleEvent}>click</button>
                
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

// METHOD 3 ARROW FUNCTION (DON'T REQUIRED BINDING)
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

// (this.state.name='mohit') ? "mohita" : "mohit"