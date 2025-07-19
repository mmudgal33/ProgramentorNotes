
import React, { Component } from 'react'
// import './V15MyScript' 

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //console.log('hello i am constructor')
    }
}

const std1 = new Student('mohit', 23); //object created, so costructor automatically called
const std2 = new Student('rohit', 25);

console.log(std1.name, std1.age);
console.log(std2.name, std2.age);


export class V15ConstructorBasicsMyScript extends Component {
    
    render() {
        return (
            <>
                <script>src="V15MyScript.js"</script>
                <V15ConstructorBasics name={std1.name} age={std1.age} />
                <V15ConstructorBasics name={std2.name} age={std2.age} />
            </>
        )
    }
}


export class V15ConstructorBasics extends Component {

    render() {
        return (
            <div>
                <h1>hello from constructor {this.props.name} {this.props.age}</h1>
            </div>
        )
    }
}





