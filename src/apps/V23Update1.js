import React, { Component } from 'react';
// import V23Update2 from './V23Update2';
import '../App.css';

// let msg= "mohit";
// if(msg="mohit"){msg="mohini"}else{ msg="mohit"}

//rcc,rconst
export class V23Update1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name1: 'mohit'
        }

        this.changeState1 = this.changeState1.bind(this);
        // above statement bind changeState1 and this keyword together
        // arrow function don't required binding
    }

    
    changeState1() {
        console.log('button click');
        
        this.setState({
            // name1: 'mohini'
            name1: this.state.name1==='mohit' ? 'mohini' :'mohit'
            // remember above line of updation 

        });   
    }

    

    render() {
        return (
            <div className='App'>
                <h1>Parent {this.state.name1}</h1>
                <button onClick={this.changeState1}>change state from parent props</button>
                <V23Update2 name1={this.state.name1} />
                
            </div>
        )
    }
}




export class V23Update2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name2: this.props.name1,
            // name2 not changed using setState of this component

        }
    }

    

    // here <V23Update2 name={this.state.name1} /> sent props (which is saved as state) then 
    //<button onClick={this.changeState}></button> change state, but props already sent. 
    //here this.state can't be used, as it's for first update but if state update regularly 
    //then this.state not used. we use
    // !== not identical, === identical
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called', props.name1 );
        
        if (props.name1 !== state.name2) {
            return { name2: props.name1 }
        }
        
        return null

    }


    render() {
        return (
            <div>
                <h1>Child {this.state.name2}</h1>
                
            </div>
        )
    }
}

