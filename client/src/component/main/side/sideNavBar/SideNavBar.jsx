import React from 'react'
import './SideNavBar.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { selectUserListOption, setUserListRender } from '../../../../features/users/utilSlice'
import { useState } from 'react'
import { useLogOutMutation } from '../../../../features/auth/authApiSlice'
import { useEffect } from 'react'
import Ring from '../../../../song/ring.mp3'


const SideNavBar = ({ notificationsLength, connection, setConection }) => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)
  const usersList = useSelector(selectUserListOption)
  const [modalMenuVisibility, setMmodalMenuVisibility] = useState("MenuHide")
  const [menuActive, setMenuActive] = useState("")
  const [logOut] = useLogOutMutation()
  const [countNotis, setContNotis] = useState(notificationsLength)

  useEffect((state) => {
    setContNotis(notificationsLength)

    if (notificationsLength > countNotis) {
      const ring = new Audio(Ring)
      ring.play()
    }

  }, [notificationsLength])

  useEffect((state) => {
  }, [countNotis])

  return (
    <nav className='navNar'>
      <div className='img_name'>
        <img src={user.img} alt="User Avatar" />
        <h1>{user.name}</h1>
        <div className={`connectionUser ${connection === "0" ? "offLine" : "onLine"}`} ></div>
      </div>
      <ul className='navBarOptions'>
        <li className='Icons notification' onClick={() => { dispatch(setUserListRender("notifications")) }}>
          <span className="material-symbols-outlined">
            notifications
          </span>
          {countNotis > 0 ? <div className='notificationsLength'>{countNotis}</div> : <div></div>}
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
          <span className={`material-symbols-outlined Icons ${menuActive}`} onClickCapture={() => {
            setMmodalMenuVisibility(modalMenuVisibility === "MenuShow" ? "MenuHide" : "MenuShow")
            setMenuActive(modalMenuVisibility === "MenuShow" ? "" : "menuActive")
          }}>
            menu
          </span>

          <div className={`menuModal ${modalMenuVisibility}`}>
            <ul className='menuList'>
              <li className='menuListItem' onClick={() => {
                setConection({ id: user.id, status: "0" }).then((res) => { console.log(res); logOut() })
              }}><p>Cerrar sesión</p></li>
            </ul>
          </div>
          <div className={`menuModaBackground ${modalMenuVisibility}`} onClick={() => {
            setMmodalMenuVisibility("MenuHide")
            setMenuActive(modalMenuVisibility === "MenuShow" ? "" : "menuActive")
          }}>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default SideNavBar 