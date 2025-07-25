import React, { Component } from 'react'
import '../App.css';

//rcc,rconst

export class V30StylingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }

    changeState = () => {
        this.setState({
            active:true
        })
    }

    render() {
        let obj1 = {
            color:'blue',
            backgroundColor:'orange'
        }
        let obj2 = {
            fontSize:'50px',
            fontFamily:'cooper'
        }
        let obj3 = {
            color: 'blue',
            backgroundColor: 'orange',
            fontSize: '50px',
            fontFamily: 'cooper'
        }
        if(this.state.active){
            obj3.backgroundColor= 'pink';
            obj3.color= 'red';

        }
        return (
            <div className='App'>
                <button style={obj3} onClick={this.changeState}>click me</button><hr />
                <h1 style={{color:'red',backgroundColor:'yellow'}}>Learning Never Ends</h1><hr />
                <h1 style={obj1}>Learning Never Ends</h1><hr />
                <h1 style={{...obj1,...obj2}}>Learning Never Ends</h1><hr />
            </div>
        )
    }
}

//applying inline css in react using its different methodology
//{} js expression, {{}} js object inside js expression
//backgroundColor is in camel casing, first small then all capital, not background-color in css
//backgroundColor is js object property
//here obj has scope of this component only
//style={{...obj,...obj2}}, ecma script 6 spread operator
//copy array/object to different array/object using spread operator, they sent as single array/object to style attribute



