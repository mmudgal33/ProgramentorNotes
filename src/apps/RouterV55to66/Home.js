import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  let obj1 = {
    color: 'gold',
    backgroundColor: 'silver'
  }
  let obj2 = {
    fontSize: '25px',
    fontFamily: 'cooper'
  }
  


  const navigate = useNavigate();
  return (
    <div style={{ color: 'blue', backgroundColor: 'orange', padding: '20px' }}>
      <h1> home component</h1>
      <h3>Back button</h3>
      <button  style={{...obj1,...obj2}} onClick={() => navigate(-1)}>Go Back Component level</button>
    </div>
  )
}


// 'background-color' changed to backgroundColor