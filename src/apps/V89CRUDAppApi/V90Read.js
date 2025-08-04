import axios from 'axios'

import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



export function V90Read() {

    function handleDelete(id) {
        axios.delete(`https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud/${id}`)
            .then(() => { getData(); })
    }

    const [apiData, setApiData] = useState([]);

    // const navigate = useNavigate();

    function getData() {
        axios.get('https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud')
            .then((response) => {
                setApiData(response.data);
                console.log(response.data);
            })
    }

    useEffect(() => { getData(); }, [])

    function setDataToStorage( id, name, age, email){
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
    }


    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2'>

                        <td>
                            <Link to='/create'>
                                <button className='btn btn-primary'> create new data </button>
                            </Link>
                        </td>
                    </div>
                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.e_name}</td>
                                                <td>{item.e_age}</td>
                                                <td>{item.e_email}</td>

                                                {/* <td><button className='btn btn-primary'>Edit</button></td> */}
                                                <td>
                                                    <Link to='/edit'>
                                                        <button className='btn btn-primary' onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}> Edit </button>
                                                    </Link>
                                                </td>
                                                <td><button className='btn btn-danger' onClick={() => { if (window.confirm('are you sure delete it')) handleDelete(item.id) }}>Delete</button></td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    )
}










