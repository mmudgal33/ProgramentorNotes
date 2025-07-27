import React from 'react'
import { useParams } from 'react-router-dom'

export function UserDetails() {
  const userId = useParams();
  // users/:id received as users:id returned
  // const {id} = useParams();
  const id = userId.id;
  return (
    <div  style={{color : 'yellow', backgroundColor : 'brown', padding: '20px'}}>
      <h2>User Details Page...{id}</h2>
      
    </div>
  )
}


