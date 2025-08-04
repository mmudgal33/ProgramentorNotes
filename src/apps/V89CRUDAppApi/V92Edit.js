
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export function V92Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [apiData, setApiData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id', id));
        setName(localStorage.getItem('name', name));
        setAge(localStorage.getItem('age', age));
        setEmail(localStorage.getItem('email', email));

    },[])
    

    const handleReset = (e) => {
        setName('');
        setAge('');
        setEmail('');
    }

    

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud/${id}`,{
            e_name : name,
            e_age : age,
            e_email :email

        }).then(() => { navigate('/') }).catch((error) => (console.log(error)))

    }
   
   
  return (
    <>
            <div className='row'>
            
                <div className='col-md-4'>
                <div className='bg-primary p-4 text-center'><h1>Edit Data</h1></div>
                    <form onSubmit={handleUpdate}>

                        <div className='form-group'>
                            <label htmlFor="name">Enter Name: &nbsp;</label>
                            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} id='name' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">Enter Email: &nbsp;</label>
                            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} id='email' className='form-control' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="age">Enter Age: &nbsp;</label>
                            <input type="number" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} id='age' className='form-control' />
                        </div>
                        <br />

                        <div className='d-grid'>
                            <input type="submit" value="submit" className='btn btn-primary' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="reset" value="reset" className='btn btn-primary' onClick={handleReset}/>
                        </div>
                    </form>
                </div>
            </div>
            {name} <br />
            {email} <br />
            {age} <br />
            {JSON.stringify(apiData)}
        </>
  )
}


// Inspect -> Application -> localStorage -> http://localhost:3000/ -> see storage