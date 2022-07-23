import React from 'react'
import { useState } from 'react'
import ContactList from './contacts/ContactList'
import './Side.css'
import SideNavBar from './sideNavBar/SideNavBar'
import SearchMain from '../../searchUsers/SearchMain'
import { useLogOutMutation } from '../../../features/auth/authApiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserListOption, setUserListRender } from '../../../features/users/utilSlice'

const Side = () => {

  // const [component, setComponent] = useState("contactList")
  const component = useSelector(selectUserListOption)
  const [logOut]=useLogOutMutation()
  const dispatch = useDispatch()


  return (
    <div className='SideContainer'>
        <SideNavBar/>
        {component==="contactList"? <ContactList/> : component==="buscar"? <SearchMain/> : <div>nada</div>}
    </div>
  )
}

export default Side