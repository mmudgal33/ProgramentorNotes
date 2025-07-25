// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import React from 'react'
import NavLinkcss from './navbar.css'; 




export const Navbar = () => {
    
    
return (
    <>
        {/* <nav >
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/about'>Abour</Link>&nbsp;
            <Link to='/contact'>Contact</Link>
        </nav> */}

        <nav >
            <NavLink style={NavLinkcss} to='/'>Home</NavLink>&nbsp;
            <NavLink style={NavLinkcss} to='/about'>About</NavLink>&nbsp;
            <NavLink style={NavLinkcss} to='/contact'>Contact</NavLink>

            <NavLink style={NavLinkcss} to='/products'>Products</NavLink>

            <NavLink style={NavLinkcss} to='/users'>Users</NavLink>
            {/* <NavLink style={NavLinkcss} to='/Admin'>Admin</NavLink> */}
        </nav>

    </>
)
}


