
import React, { Component } from 'react'
import './V15MyScript' 

export class V15ConstructorBasics extends Component {
    constructor(props) {
        super(props);
        console.log("constructor from V15ConstructorBasics");
    }
    render() {
        return (
            <div>
                <script>src="V15MyScript.js"</script>
                <h1>hello from constructor {this.props.name}</h1>
            </div>
        )
    }
}


export class V15ConstructorBasicsMyScript extends Component {
    render() {
        return (
            <div>
                <script> src="V15MyScript.js"</script>
            </div>
        )
    }
}


