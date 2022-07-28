import React from 'react'
import { useUpdateNotificationsMutation } from '../../../../features/users/usersApiSlice'
import './Notification.css'

const Notification = ({ not }) => {

  const [updateNotifications] = useUpdateNotificationsMutation()

  const content = not?.notificationTypeId === 2 ?
    (<div className={`notificationItem ${not.checked==="0" ? "notUnchecked" : "notChecked"}`}
      onClick={() => { if (not.checked === "0") { updateNotifications({ id: not.id, set: "check" }) } }}>
      {not?.userNameOrigin} te agregó.
    </div>) :
    (<div></div>)
  return content
}

export default Notification