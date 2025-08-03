import axios from 'axios'
import React from 'react'

export function V90Read() {

    function handleDelete(id) {
        axios.delete(`https://688fb8c9f21ab1769f89f4c3.mockapi.io/crud/${id}`)
            .then(() => { getData(); })
    }


    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2'>
                        <button className='btn btn-primary'>create new data</button>
                    </div>
                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map(() => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{NavItem.id}</td>
                                                <td>{NavItem.e_name}</td>
                                                <td>{NavItem.e_age}</td>
                                                <td>{NavItem.e_email}</td>
                                                <td><Link to='/create'>
                                                    <button className='btn btn-primary'> create new data </button>
                                                    About</Link></td>
                                                {/* <td><button className='btn btn-primary'>Edit</button></td> */}
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










