import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import Notification from './Notification'

const Notifications = ({notifications}) => {

  const user = useSelector(selectCurrentUser)
  console.log(notifications)

  return (
    <div>
      <ul>
        {
          notifications.map((not)=><li key={not.id}><Notification not={not}/></li>)
        }
      </ul>
    </div>
  )
}

export default Notifications