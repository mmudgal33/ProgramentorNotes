// rafc

import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div style={{color : 'blue', backgroundColor : 'green', padding: '20px'}}>
      <h1> contact component</h1>
      <h3>Back button</h3>
      <button onClick={ () => navigate(-1)}>Go Back Component level</button>
    </div>
  )
}


