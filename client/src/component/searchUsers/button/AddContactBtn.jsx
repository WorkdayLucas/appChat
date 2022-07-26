import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAddToContactsMutation, useCreateNotificationMutation } from '../../../features/users/usersApiSlice'
import { refecthContactList } from '../../../features/users/utilSlice'
import './AddContactBtn.css'

const AddContactBtn = ({ userId, contactId, userName }) => {

  const dispatch = useDispatch()
  const [addToContacts] = useAddToContactsMutation()
  const [btnVisility, setBtnVisibility] = useState("show")
  const [createNotification] = useCreateNotificationMutation()


  return (
    <button className={`addContactBtn ${btnVisility}`} onClick={async () => {

      await addToContacts({ userId, contactId }).
        then((result) => {
          if (result.data?.results?.msg?.includes("agregado a la lista de usuarios")) {
            setBtnVisibility("hide")
            createNotification({
              userIdOrigin: userId,
              userId: contactId,
              notificationTypeId: 2,
              userNameOrigin: userName
            });
          };
          dispatch(refecthContactList());
        });
    }}>+agregar
    </button>
  )
}

export default AddContactBtn