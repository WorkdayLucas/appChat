import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import './Mesage.css'

const Mesage = ({content, userId}) => {

    const user = useSelector(selectCurrentUser)

  return (
    <div className={userId===user.id? "userContainer" : "contactContainer" }>
       <span className={userId===user.id? "userContent" : "contactContent" } >{content}</span>
    </div>
  )
}

export default Mesage