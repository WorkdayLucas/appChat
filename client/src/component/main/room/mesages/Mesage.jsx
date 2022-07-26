import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { useUpdateMesageMutation } from '../../../../features/users/roomsApiSlice'
import './Mesage.css'

const Mesage = ({ content, userId, time, check, msgId }) => {

  const user = useSelector(selectCurrentUser)
  const [updateMesage] = useUpdateMesageMutation()

  useEffect(()=>{
   if(userId!==user.id && check==="0"){
      updateMesage({id: msgId,set:"check"})
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