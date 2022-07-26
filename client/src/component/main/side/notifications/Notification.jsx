import React from 'react'

const Notification = ({not}) => {

  const content = not?.notificationTypeId === 2 ?
  (<div>{not?.userNameOrigin} te agregó.</div>) : 
  (<div></div>)
  return content
}

export default Notification