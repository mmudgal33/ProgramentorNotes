// localhost:3000/search?q=USA
// input:submit

import React from 'react'
import { useSearchParams } from 'react-router-dom'


export function Search() {

    const [searchParams, setSearchParams] = useSearchParams({ name: "mohit", age: 15 });


    const handleChange = (e) => {
        setSearchParams({
            [e.target.name]: e.target.value,
        });
    };


    const handleSearch = (e) => {
        e.preventDefault();
        // http://localhost:3000/search?q=adil&age=23
        const name = searchParams.get('name');
        const age = searchParams.get('age');
        alert(name + " " + age)
    }

    return (
        <div style={{color : 'brown', backgroundColor : 'gray', padding: '20px'}}>
            <h2>this is search page</h2>
            <form onSubmit={handleSearch}>
                <label htmlFor="Name">Name: &nbsp; </label>
                <input type="text" id='Name' placeholder='Name' name='name' onChange={(e) => handleChange} /><br />
                <label htmlFor="Age">Age: &nbsp; </label>
                <input type="number" id='Age' placeholder='Age' name='age' onChange={(e) => handleChange} /><br />
                <input type="button" value="Reset" onClick={() => setSearchParams()} /> &nbsp;
                <input type="submit" value="search" />



            </form>
            
            <button onClick={() => setSearchParams({ name: "mohita", age: 25 })}>Show Auto Users</button>
        </div>
    )
}


