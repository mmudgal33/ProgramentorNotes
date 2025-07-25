import { Link } from 'react-router-dom';

import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const Products = () => {
  const navigate = useNavigate();
  return (
    <>
    <div style={{color : 'blue', backgroundColor : 'pink', padding: '20px'}}>
      <h1> products component</h1>

      <h3>Back button</h3>
      <button onClick={ () => navigate(-1)}>Go Back Component level</button>
    </div>

    <nav className='main'>
        <Link to='shirts'>shirts</Link>
        <Link to='jeans'>jeans</Link>
    </nav>
    <Outlet/>
    </>
  )
}