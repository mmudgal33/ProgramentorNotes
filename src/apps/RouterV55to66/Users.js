import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom'

export function Users() {
    const navigate = useNavigate();
    return (
        <div style={{ color: 'blue', backgroundColor: 'skyblue', padding: '20px' }}>
            <h1>Users Details Page...</h1>

            <h3>Back button</h3>
            <button onClick={() => navigate(-1)}>Go Back Component level</button>

            <nav>
                <h2><Link to='/users/1'>user1</Link></h2>
                <h2><Link to='/users/2'>user2</Link></h2>
                <h2><Link to='/users/3'>user3</Link></h2>
                <h2><Link to='/users/admin'>admin</Link></h2>
            </nav>
            <Outlet />
        </div>
    )
}