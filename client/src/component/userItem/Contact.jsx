import React from 'react'
import './contact.css'

const Contact = ({ img, name }) => {
  return (
    <div className='userItem'>
      <img src={img} alt={name} />
      <h3>{name}</h3>

    </div>
  )
}

export default Contact