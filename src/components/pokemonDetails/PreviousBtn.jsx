import React from 'react'
import { useNavigate } from 'react-router-dom'

const PreviousBtn = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div onClick={handleClick} className='previous'>
        <button className='btn'>&#60;&#60;Atras</button>
    </div>
  )
}

export default PreviousBtn