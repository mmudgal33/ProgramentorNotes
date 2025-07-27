// rfce
import React, { useState } from 'react'

export function V68CustomValidation() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleName = (e) => {
        let name = e.target.value;
        if (name.length < 3) { setNameError(true); }
        else { setNameError(false); }
        setName(name);
    }

    const handleEmail = (e) => {
        let email = e.target.value;
        if (!email.match(emailRegex)) { setEmailError(true); }
        else { setEmailError(false); }
        setEmail(email);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value + " " + e.target[1].value);

        let name = e.target[0].value;
        if (name.length < 3) { setNameError(true); }
        else { setNameError(false); }
        setName(name);
        let email = e.target[1].value;
        if (!email.match(emailRegex)) { setEmailError(true); }
        else { setEmailError(false); }
        setEmail(email);

        if ((!name.length < 3) && (email.match(emailRegex))) {
            console.log("Form Submitted");
            console.log("name = " + name );
            console.log("email = " + email);
        }
    }







    return (
        <div>
            <h1>Form Validation Demo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name:</label>
                <input type="text" required id='name' name='name' value={name} onChange={handleName} />
                <br />{nameError ? <span style={{ color: 'red' }}>Name length must be greater than 2 characters</span> : ""}<br />
                
                <label htmlFor="email">Enter Email:</label>
                <input type="text" required id='email' name='email' value={email} onChange={handleEmail} />
                <br />{emailError ? <span style={{ color: 'red' }}>Invalid Email</span> : ""}
                <br />
                
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}


