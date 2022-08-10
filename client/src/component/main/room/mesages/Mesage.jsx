import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { useUpdateMesageMutation } from '../../../../features/users/roomsApiSlice'
import { useUpdateNotificationsMutation } from '../../../../features/users/usersApiSlice'
import { selectCurrentContact } from '../../../../features/users/utilSlice'
import './Mesage.css'

const Mesage = ({ content, userId, time, check, msgId }) => {

  const user = useSelector(selectCurrentUser)
  const [updateMesage] = useUpdateMesageMutation()
  const [updateNotifications] = useUpdateNotificationsMutation()
  const currentContact = useSelector(selectCurrentContact)

  useEffect(()=>{
   if(userId!==user.id && check==="0"){
      updateMesage({id: msgId,set:"check"})
      updateNotifications({set:"check",type:1,contactId:currentContact.id})
    }
  },[])

  return (
    <div className={userId === user.id ? "userContainer" : "contactContainer"}>
      <span className={userId === user.id ? "userContent" : "contactContent"} >
        <span>{content}</span>
        <span className='time'>{time.split(" ")[4]?.substring(0, 5)}</span>
        {
          userId===user.id? (<span className={`material-symbols-outlined ${check==="0"? "unchecked" : "checked"}`}>
          done_outline
        </span>) : (<div></div>)
        }
      </span>
    </div>
  )
}

export default Mesage