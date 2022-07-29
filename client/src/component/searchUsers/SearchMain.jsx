import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'
import { useSearchUsersQuery } from '../../features/users/usersApiSlice'
import Contact from '../userItem/Contact'
import UserSearched from '../userItem/UserSearched'
import AddContactBtn from './button/AddContactBtn'
import './SearchMain.css'

const SearchMain = () => {

    const [search, setSearch] = useState("")
    const currentUser = useSelector(selectCurrentUser)

    const { data, refetch } = useSearchUsersQuery({ search: search || "?", userId: currentUser.id })

    useEffect(() => {
    }, [data])



    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className='searchContainer'>
            <div className="searchInputContainer">
                <span class="material-symbols-outlined">
                    search
                </span>
                <input type={"text"} onChange={handleChange} value={search} placeholder={"Buscar usuario nuevo..."} />
            </div>
            <ul className='resultsList'>
                {
                    data?.results ? (data.results.map((user) => <li key={user.id} className="userResult">
                        <UserSearched img={user.img} name={user.name} userId={currentUser.id} contactId={user.id} userName={currentUser.name} />
                    </li>)) : (<div>  </div>)
                }
            </ul>
        </div>
    )
}

export default SearchMain