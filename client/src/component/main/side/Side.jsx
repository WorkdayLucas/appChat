import React from 'react'
import { useState } from 'react'
import ContactList from './contacts/ContactList'
import './Side.css'
import SideNavBar from './sideNavBar/SideNavBar'
import SearchMain from '../../searchUsers/SearchMain'
import { useLogOutMutation } from '../../../features/auth/authApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getNewMesages, selectUserListOption, selectUsersListVisibility, setUserListRender } from '../../../features/users/utilSlice'
import Notifications from './notifications/Notifications'
import { useGetNotificationsQuery } from '../../../features/users/usersApiSlice'
import { selectCurrentUser } from '../../../features/auth/authSlice'
import { useEffect } from 'react'


const Side = () => {

  // const [component, setComponent] = useState("contactList")
  const user = useSelector(selectCurrentUser)
  const component = useSelector(selectUserListOption)
  const [logOut] = useLogOutMutation()
  const dispatch = useDispatch()
  const [act, setAct] = useState(0) 

  const { data, refetch } = useGetNotificationsQuery(user.id)

  const visibility = useSelector(selectUsersListVisibility)
  
  useEffect(() => {
    // console.log("Escuchando notificaciones...")
    refetch()
  }, [act])
  setTimeout(()=>{setAct(act+1)},1000)


  return (
    <div className='SideContainer'>
      <SideNavBar notificationsLength={(()=>{
        const uncheckedNots = data?.filter((not)=>not.checked==="0"&&not.notificationTypeId===2)
        const uncheckedMsgs = data?.filter((msg)=>msg.checked==="0"&&msg.notificationTypeId===1)
        dispatch(getNewMesages(uncheckedMsgs))
        return uncheckedNots?.length
        })()} />
      <div className={visibility}>
        {component === "contactList" ? <ContactList /> :
         component === "buscar" ? <SearchMain /> :
         component === "notifications" ? <Notifications notifications={data ? data :[]} /> :
         <div>nada</div>}
      </div>

    </div>
  )
}

export default Side