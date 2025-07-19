import React, { Component } from 'react'


export class V16StatePropsDiffPassProps extends React.Component {
    render() {
        return (
            <V16StatePropsDiff name="Mohini" />
        )
    }
}


export class V16StatePropsDiff extends Component {
    state = {
        //name: "Mohit",
        name: this.props.name,
        surname: "Mudgal",
        age: 31,
        num: 1
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //name: "Mohit",
    //         name: this.props.name,
    //         surname: "Mudgal",
    //         age: 31
    //         //num: 1
    //     }
    // }

    changeName() {
        this.setState({
            name: "Mohita",
            surname: "Mudgal",
            age: 30,
            //num: this.state.num + 1
        })

    }

    plus() {
        this.setState({
            num: this.state.num + 1
        })
    }

    minus() {
        this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        return (
            <>
                <h1 >Name {this.state.name} &nbsp;
                    Surname {this.state.surname} &nbsp;
                    Age {this.state.age} &nbsp;
                </h1>
                <label htmlFor="num">num is &nbsp; {this.state.num} &nbsp; </label>
                <input type="button" id='cs' value="change state" onClick={() => this.changeName()} />&nbsp;
                <input type="button" id='-' value="-" onClick={() => this.minus()} />&nbsp;
                <input type="button" id='+' value="+" onClick={() => this.plus()} />

            </>
        )
    }
}

// &nbsp;  to give space




