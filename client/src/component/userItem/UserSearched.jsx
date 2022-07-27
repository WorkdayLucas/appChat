import React from 'react'
import AddContactBtn from '../searchUsers/button/AddContactBtn'
import './contact.css'

const UserSearched = ({ img, name, userId, contactId, userName }) => {
    return (
        <div className='userItemSearched'>
            <div className='userItemSearched_imgName'>
                <img src={img} alt={name} />
                <h3>{name}</h3>
            </div>
            <AddContactBtn userId={userId} contactId={contactId} userName={userName} />
        </div>
    )
}

export default UserSearched