import React from 'react'
import { useParams } from 'react-router'

const Rooms = () => {
  const params = useParams();
  
  return (
    <div>
      <h1>Rooms</h1>
      <p>{params.hotel}</p>
      <p>{params.date}</p>
      </div>
  )
}

export default Rooms