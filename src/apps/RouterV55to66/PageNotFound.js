import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div style={{color : 'blue', backgroundColor : 'red', padding: '20px'}}>
      <h1> Page Not Found Component</h1>
      <h3>Back button</h3>
      <button onClick={ () => navigate(-1)}>Go Back Component level</button>
    </div>
  )
}