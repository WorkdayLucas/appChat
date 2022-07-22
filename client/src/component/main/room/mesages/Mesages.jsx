import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Mesage from './Mesage'
import './Mesages.css'

const Mesages = ({mensajes}) => {

   

return (
    <div className='msgContainer'>
      <ul>
        {mensajes.map(msg=><li key={msg.id}><Mesage content={msg.content} userId={msg.userId}/></li>)}
      </ul>
    </div>
  )
}

export default Mesages