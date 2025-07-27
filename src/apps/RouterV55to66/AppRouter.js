// npm i 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import React from 'react'
import { Navbar } from './Navbar'

import { Products } from './Products'
import { Shirts } from './Shirts'
import { Jeans } from './Jeans'

import { Admin } from './Admin'
import { Users } from './Users'
import { UserDetails } from './UserDetails'
import { Search } from './Search'

import { PageNotFound } from './PageNotFound'








export const AppRouter = () => {
  const navigate = useNavigate();
  const navigateToContact = () => navigate('/Contact');
  const navigateTo = (url) => navigate(url);

  const navigateToWhere = () => {

    const rout = document.getElementsByClassName("active")[0].innerHTML;
    console.log(rout);

    let url = '/' + rout;
    console.log(url);
    if (url === '/' || url === '/Home') {
      navigate('/About');
    } else if (url === '/About') {
      navigate('/Contact');
    } else if (url === '/Contact') {
      navigate('/');
    }
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />

        {/* <Route path='/Products' element={<Products />} /> */}

        <Route path='/Products' element={<Products />} >
          <Route index element={<Shirts />}></Route>
          <Route path='Shirts' element={<Shirts />} />
          <Route path='Jeans' element={<Jeans />} />
        </Route>

        {/* <Route path='/Users' element={<Users />} />
        <Route path='/Users/:id' element={<UserDetails />} />
        <Route path='/Admin' element={<Admin />} /> */}

        <Route path='/Users' element={<Users />} >
          <Route path=':id' element={<UserDetails />} />
          <Route path='Admin' element={<Admin />} />
        </Route>

        <Route path='/Search' element={<Search />} />


        <Route path='*' element={<PageNotFound />} />

      </Routes>
      <h3>Type 1 Event Handling</h3>
      <button onClick={() => navigate('/About')}>About</button><br />

      <h3>Type 2 Event Handling</h3>
      <button onClick={navigateToContact}>Contact</button><br />

      <h3>Type 3 Event Handling</h3>
      <h3>when parameter sent or circle bracket used arrow must be used</h3>
      <button onClick={() => navigateTo('/')}>Home</button>
      <button onClick={() => navigateTo('/About')}>About</button>
      <button onClick={() => navigateTo('/Contact')}>Contact</button>

      <h3>Type 4 conditional navigation</h3>
      <button onClick={() => navigateToWhere()} >conditional navigation</button>

      <h3>Back button</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}


// path='shirts'  is relative path
// http://localhost:3000/Products/shirts

// path='/Products' is absolute path

// <Route index element={<Shirts />}></Route>
// to make shirts as default component open when products component open 

// nested route must have relative path only