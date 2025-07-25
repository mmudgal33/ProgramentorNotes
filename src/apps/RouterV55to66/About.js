import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate();
  return (
    <div style={{color : 'blue', backgroundColor : 'pink', padding: '20px'}}>
      <h1> about component</h1>
      <h3>Back button</h3>
      <button onClick={ () => navigate(-1)}>Go Back Component level</button>
    </div>
  )
}


