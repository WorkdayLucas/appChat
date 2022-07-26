import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/auth/authSlice'
import { useSearchUsersQuery } from '../../features/users/usersApiSlice'
import Contact from '../userItem/Contact'
import AddContactBtn from './button/AddContactBtn'
import './SearchMain.css'

const SearchMain = () => {

    const [search, setSearch] = useState("")
    const currentUser = useSelector(selectCurrentUser)
   
    const { data, refetch } = useSearchUsersQuery({search: search || "?", userId:currentUser.id })

    useEffect(() => {
    }, [data])



    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className='searchContainer'>
            <input type={"text"} onChange={handleChange} value={search} placeholder={"Buscar usuario..."} />
            <ul>
                {
                    data?.results ? (data.results.map((user) => <li key={user.id}>
                        <Contact img={user.img} name={user.name} />
                        <AddContactBtn  userId={currentUser.id} contactId={user.id} userName={currentUser.name}/>
                    </li>)) : (<div>  </div>)
                }
            </ul>
        </div>
    )
}

export default SearchMain