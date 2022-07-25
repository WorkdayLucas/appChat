import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import './Mesage.css'

const Mesage = ({content, userId, time}) => {

    const user = useSelector(selectCurrentUser)

    console.log(time?.split(" ")[4]?.substring(0,5))
    
  return (
    <div className={userId===user.id? "userContainer" : "contactContainer" }>
       <span className={userId===user.id? "userContent" : "contactContent" } >
        <span>{content}</span>
       <span className='time'>{time.split(" ")[4]?.substring(0,5)}</span>
       </span>
    </div>
  )
}

export default Mesage