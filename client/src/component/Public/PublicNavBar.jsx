import React from 'react'
import './PublicNavBar.css'
import icon from '../../images/Chat-It _icon.png'

const PublicNavBar = () => {
   return (
    <nav className='PublicNavNar'>
        <img src={icon} alt="Chat it"/>
        <h1>Chat-It</h1>
    </nav>
    )
}

export default PublicNavBar