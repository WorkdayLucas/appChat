import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'

const Notifications = ({notifications}) => {

  const user = useSelector(selectCurrentUser)

  return (
    <div>
      <ul>
        {
          notifications.map((not)=><li>notificacion de {not.userNameOrigin}</li>)
        }
      </ul>
    </div>
  )
}

export default Notifications