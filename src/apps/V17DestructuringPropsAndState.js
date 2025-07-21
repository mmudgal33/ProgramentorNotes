//import React from 'react'

import React, { Component } from 'react'


export function V17DestructuringPropsAndStatePassingProps() {
    /* props.name="farhan";  cannot be done, prop can't change*/
    return (
        <>
            <V17DestructuringPropsAndState1 name="sakshi" age={29} />
            <V17DestructuringPropsAndState2 name="rohit" age={35} />
            <V17DestructuringPropsAndState3 name="mohit" age={33} />
            <V17DestructuringPropsAndState4 name="radha" age={31} />
            <V17DestructuringPropsAndState5 name="saurabh" age={30} />

        </>
    );
}


export class V17DestructuringPropsAndState1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // name: "Mohit",
            // age: 31
            name: this.props.name,
            age: this.props.age
        }
    }
    render() {
        const { name, age } = this.state
        return (
            <div>
                <h1>{name} {age}</h1>
            </div>
        )
    }
}




export class V17DestructuringPropsAndState2 extends Component {
    render() {
        const { name, age } = this.props //props var name can't be change
        return (
            <div>
                <h1>{name} {age}</h1>
            </div>
        )
    }
}


export function V17DestructuringPropsAndState3( props ) {
    const { name, age } = props //props var name can't be change
    return (
        <div>
            <h1>{name} {age}</h1>
        </div>
    )
}


export function V17DestructuringPropsAndState4(props) {
    return (
        <div>
            <h1>{props.name} {props.age}</h1>
        </div>
    )
}

export function V17DestructuringPropsAndState5({ name, age }) {
    return (
        <div>
            <h1>{name} {age}</h1>
        </div>
    )
}









