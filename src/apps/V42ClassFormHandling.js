// two types -> Controlled components -> saved in state of react component -> component handle form
// Uncontrolled components handled by Dom in normal form

// input:submit   <input type="submit" value="" />

import React, { Component } from 'react'

export class V42ClassControlledForm extends Component {
    //const
    constructor(props) {
        super(props)
        this.state = {
            name: 'mohit',
            city:'kv',
            subjects:'pcm'

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    // handleChange = (e) => {

    //     console.log(e)
    //     console.log(e.target.value);

    //     this.setState({
    //         [e.target.name]: e.target.value
    //         //data : e.target.value.toLowerCase().substring(0,15)  // function Chaining
    //     });
    // }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const new_value = (name === 'email') ? value.toLowerCase() : value ;

        console.log(e)
        console.log(e.target.value);

        this.setState({
            // [name]: value
            [name]: new_value
            //data : e.target.value.toLowerCase().substring(0,15)    // function Chaining
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        console.log(e.target[0].value);

    }



    render() {
        return (
            <>
            <h1 style={{ color: 'red' }}>V42ClassControlledForm</h1><hr />
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name">Enter Name:</label>
                    <input type="text" id='name' name='name' value={this.state.name} onChange={this.handleChange} /><br />

                    <label htmlFor="city">Enter City:</label>
                    <input type="text" id='city' name='city' value={this.state.city} onChange={this.handleChange} /><br />

                    <label htmlFor="subjects">Enter Subject:</label>
                    <input type="text" id='subjects' name='subjects' value={this.state.subjects} onChange={this.handleChange} /><br />

                    <input type="submit" value="submit" />
                </form>
            </>
        )
    }
}

