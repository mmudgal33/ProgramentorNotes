import React, { Component } from 'react'

export default class V23Update2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name2: this.props.name1
        }
    }

    // here <V23Update2 name={this.state.name1} /> sent props (which is saved as state) then 
    //<button onClick={this.changeState}></button> change state, but props already sent. 
    //here this.state can't be used, as it's for first update but if state update regularly 
    //then this.state not used. we use
    // !== not identical, === identical
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called');
        if (props.name1 !== state.name2) {
            return { name2: props.name1 }

        }
        return null

    }


    render() {
        return (
            <div>
                <h1>{this.state.name2}</h1>
            </div>
        )
    }
}
