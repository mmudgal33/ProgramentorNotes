
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export function V87AxiosRouting() {

    return (
        <>
            {/* <V87GetAxiosRouting /> */}
            <V88PostAxiosRouting />
            

        </>
    );
}



export function V87GetAxiosRouting() {
    const [mydata, setData] = useState([]);
    const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        }).catch((error) => console.log(error));
    }, [])

    let data = {
        border: '3px blue ridge',
        backgroundColor: 'aqua',
        // fontSize: '2px',
        fontFamily: 'cooper',
        width: '500px'
    }
    return (
        <>
            <ul>{mydata.map((item) => {
                const { id, title, body } = item;
                let title_slice = title.slice(0, 10);
                {/* let body_slice = body.slice(0,50).toUpperCase(); */ }
                let body_slice = body.slice(0, 50).toLowerCase();
                return (<div style={data} key={id}>
                    <li>id {id}, title {title_slice}, body {body_slice}</li>
                    {/* <li>{pst.title}</li> */}
                </div>)
            })}
            </ul>
        </>
    )
}





export function V88PostAxiosRouting() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseURL, {
            title,
            body
        })
            .then((response) => { console.log(response); })
            .catch((error) => { console.log(error); })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Enter Title: &nbsp;</label>
                <input type="text" id='title' name='title' onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
                <label htmlFor="body">Enter Body: &nbsp;</label>
                <input type="text" id='body' name='body' onChange={(e) => setBody(e.target.value)} />
                <br /><br />
                <input type="submit" value="Post" />
            </form>
        </>
    )
}


