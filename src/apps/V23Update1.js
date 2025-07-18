import React, { Component } from 'react';
import V23Update2 from './V23Update2';
import '../App.css';

//rcc,rconst
export default class V23Update1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name1: 'mohit'
        }
    }

    changeState = () => {
        console.log('button click');
        this.setState({
            name1: 'mohini'
        });
    }

    render() {
        return (
            <div className='App'>
                <V23Update2 name1={this.state.name1} />
                <button onClick={this.changeState}>change state</button>
            </div>
        )
    }
}
