import React from 'react'
import { useState } from 'react'
import ContactList from './contacts/ContactList'
import './Side.css'
import SideNavBar from './sideNavBar/SideNavBar'
import SearchMain from '../../searchUsers/SearchMain'
import { useLogOutMutation } from '../../../features/auth/authApiSlice'

const Side = () => {

  const [component, setComponent] = useState("contactList")
  const [logOut]=useLogOutMutation()


  const handleClick = (option)=>{
    setComponent(option)
  }



  return (
    <div className='SideContainer'>
        <SideNavBar/>
        <button onClick={()=>{handleClick("contactList")}}>contactos</button>
        <button onClick={()=>{handleClick("buscar")}}>buscar</button>
        <button onClick={logOut}>cerrar sesión</button>
        {component==="contactList"? <ContactList/> : component==="buscar"? <SearchMain/> : <div>nada</div>}
    </div>
  )
}

export default Side