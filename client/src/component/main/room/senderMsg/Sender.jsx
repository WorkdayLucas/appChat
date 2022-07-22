import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { useCreateMesageMutation } from '../../../../features/users/roomsApiSlice'
import './Sender.css'

const Sender = ({ roomId}) => {
    const user = useSelector(selectCurrentUser)
    const [input, setInput] = useState("")
    const [createMesage] = useCreateMesageMutation()

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        if (input.trim() !== "") {
            createMesage({ content: input, userId: user.id, roomId: roomId })
            setInput("")
        }
        // console.log({ content: input, userId: user.id, roomId: roomId })
    }

    return (
        <div className='footSender'>
            <div>
                <input type={"text"} onChange={handleChange} value={input}/>
                <button onClick={handleClick}>enviar</button>
            </div>
        </div>
    )
}

export default Sender