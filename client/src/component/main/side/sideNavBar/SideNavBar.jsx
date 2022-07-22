import React from 'react'
import './SideNavBar.css'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'

const SideNavBar = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <nav className='navNar'>
        <img src={user.img} alt="User Avatar"/>
        <h1>{user.name}</h1>
    </nav>
  )
}

export default SideNavBar