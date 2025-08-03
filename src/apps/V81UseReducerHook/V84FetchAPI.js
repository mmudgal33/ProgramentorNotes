import React, { useEffect, useState } from 'react'

export function V84FetchAPI() {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response)=>{
                // console.log(response);
                let result = response.json();
                result.then((result)=>{
                console.log(result);
                setPosts(result);
            })

                }).catch(error => console.error(error));

                // console.log(posts);
    },[])

    let data = {
        border : '3px blue ridge',
        backgroundColor: 'aqua',
        // fontSize: '2px',
        fontFamily: 'cooper',
        width : '500px'
    }



    return (
        <div>
        <ul>{posts.map( (pst) => {
            return(<div style={data} key={pst.id}>
                <li>id {pst.id}, title {pst.title}</li>
                {/* <li>{pst.title}</li> */}
            </div>)
        })}</ul>

        </div>
    )
}


// React Console Log Twice
// In React, it is common for console.log statements to appear twice in the console, especially during development. 
// This behavior is primarily due to React's StrictMode, which is enabled by default in many React projects, 
// including those created with Create React App (CRA) and Next.js.