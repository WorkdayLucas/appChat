import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAddToContactsMutation } from '../../../features/users/usersApiSlice'
import { refecthContactList } from '../../../features/users/utilSlice'
import './AddContactBtn.css'

const AddContactBtn = ({userId, contactId}) => {

    const dispatch = useDispatch()
    const [addToContacts] = useAddToContactsMutation()
  const [btnVisility, setBtnVisibility] = useState("show")


  return (
    <button className={`addContactBtn ${btnVisility}`} onClick={() => {
        addToContacts({ userId, contactId}).
            then((result) => { 
                if(result.data?.results?.msg?.includes("agregado a la lista de usuarios")){
                  console.log("agregado a la lista de usuarios")
                  setBtnVisibility("hide")
                }; 
                dispatch(refecthContactList()) })
    }}>+agregar
    </button>
  )
}

export default AddContactBtn