import React from 'react'
import './RoomNavBar.css'

const RoomNavBar = ({ contactImg, contactName }) => {
    return (
        <nav className='RoomNavBar'>
            <img src={contactImg} alt="User Avatar" />
            <h1>{contactName}</h1>
        </nav>
    )
}

export default RoomNavBar