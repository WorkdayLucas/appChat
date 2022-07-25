import React from 'react'
import './SideNavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { selectUserListOption, setUserListRender } from '../../../../features/users/utilSlice'
import { useState } from 'react'
import { useLogOutMutation } from '../../../../features/auth/authApiSlice'
import { useEffect } from 'react'


const SideNavBar = ({notificationsLength}) => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const usersList = useSelector(selectUserListOption)
  const [modalMenuVisibility, setMmodalMenuVisibility] = useState("MenuHide")
  const [menuActive, setMenuActive] = useState("")
  const [logOut] = useLogOutMutation()

  return (
    <nav className='navNar'>
      <div className='img_name'>
        <img src={user.img} alt="User Avatar" />
        <h1>{user.name}</h1>
      </div>
      <ul className='navBarOptions'>
        <li className='Icons notification' onClick={() => { dispatch(setUserListRender("notifications")) }}>
          <span className="material-symbols-outlined">
            notifications
          </span>
          {notificationsLength > 0 ? <div className='notificationsLength'>{notificationsLength}</div>:<div></div>}
        </li> 
        {
          usersList === "contactList" ?
            <li className='Icons' onClick={() => { dispatch(setUserListRender("buscar")) }}>
              <span className="material-symbols-outlined">
                person_add
              </span>
            </li> :
            <li className='Icons' onClick={() => { dispatch(setUserListRender("contactList")) }}>
              <span className="material-symbols-outlined">
                list_alt
              </span>
            </li>
        }
        <li className="menu">
          <span className={`material-symbols-outlined Icons ${menuActive}`} onClick={() => {
            setMmodalMenuVisibility(modalMenuVisibility === "MenuShow" ? "MenuHide" : "MenuShow")
            setMenuActive(modalMenuVisibility === "MenuShow" ? "" : "menuActive")
          }}>
            menu
          </span>
          <div className={`menuModal ${modalMenuVisibility}`}>
            <ul className='menuList'>
              <li className='menuListItem' onClick={logOut}>Cerrar sesión</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default SideNavBar