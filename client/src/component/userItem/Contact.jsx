import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectNewMesages } from '../../features/users/utilSlice'
import './contact.css'

const Contact = ({ img, name, contactId }) => {

  const uncheckedMsgs = useSelector(selectNewMesages)
  const [msgs, setMsgs] = useState(0)

  const handleMsgCheck = ()=>{
    const contactUncheckedMsgs = uncheckedMsgs?.filter((msg)=> msg.userIdOrigin===contactId&&msg.checked!=="")
    if(contactUncheckedMsgs?.length>0){
      return <div className='mensagesNot'>{contactUncheckedMsgs?.length}</div>
    } else {
      return <div></div>
    }
  }

  return (
    <div className='userItem'>
      <div className='itemImgName'>
        <img src={img} alt={name} />
        <h3>{name}</h3>
      </div>
      {handleMsgCheck()}
    </div>
  )
}

export default Contact