import React from 'react'
import { useState } from 'react'
import ContactList from './contacts/ContactList'
import './Side.css'
import SideNavBar from './sideNavBar/SideNavBar'
import SearchMain from '../../searchUsers/SearchMain'
import { useLogOutMutation } from '../../../features/auth/authApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserListOption, setUserListRender } from '../../../features/users/utilSlice'
import Notifications from './notifications/Notifications'
import { useGetNotificationsQuery } from '../../../features/users/usersApiSlice'
import { selectCurrentUser } from '../../../features/auth/authSlice'

const Side = () => {

  // const [component, setComponent] = useState("contactList")
  const user = useSelector(selectCurrentUser)
  const component = useSelector(selectUserListOption)
  const [logOut]=useLogOutMutation()
  const dispatch = useDispatch()

  const {data, refetch} = useGetNotificationsQuery(user.id)
 
  setTimeout(()=>{refetch(); console.log("escuchando notificaciones..")},1200)

  return (
    <div className='SideContainer'>
        <SideNavBar notificationsLength={data?.length}/>
        {component==="contactList"? <ContactList/> : component==="buscar"? <SearchMain/> : component==="notifications"? <Notifications notifications={data? data : []} /> : <div>nada</div>}
    </div>
  )
}

export default Side