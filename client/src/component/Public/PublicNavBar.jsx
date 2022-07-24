import React from 'react'
import './PublicNavBar.css'
import icon from '../../images/Chat-It _icon.png'
import { Link } from 'react-router-dom'


const PublicNavBar = () => {
    return (
        <nav className='PublicNavNar'>
           <Link className='Title' to="/">
           <div className='icon_title'>
                <img src={icon} alt="Chat it" />
                <h1 className='Title'>Chat-It</h1>
            </div>
           </Link>
            <ul className='publicMenu'>
                <li><Link className='linkAbout' to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default PublicNavBar