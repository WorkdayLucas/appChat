import React from 'react'
import { useDispatch } from 'react-redux'
import { setRoomVisibility, setUsersListVisibility } from '../../../../features/users/utilSlice'
import './RoomNavBar.css'

const RoomNavBar = ({ contactImg, contactName }) => {

    const dispatch = useDispatch()

    return (
        <nav className='RoomNavBar'>
            <div className='romImg_Name'>
                <img src={contactImg} alt="User Avatar" />
                <h1>{contactName}</h1>
            </div>
            <ul className='navBarOptions'>
                <li onClick={() => { dispatch(setRoomVisibility("hide")); dispatch(setUsersListVisibility("")) }}>
                    <span className="material-symbols-outlined exitRoomBtn">
                        close
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default RoomNavBar