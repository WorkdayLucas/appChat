import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { useCreateMesageMutation } from '../../../../features/users/roomsApiSlice'
import './Sender.css'

const Sender = ({ roomId }) => {
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
    }

    const handleEnter = (e) => {
         if(e.key==="Enter" && input.trim() !== ""){
            createMesage({ content: input, userId: user.id, roomId: roomId })
            setInput("")
         }
    }

    return (
        <div className='footSender' >
            <div className='inputContainer'>
                <input className='mesageInput' type={"text"} onChange={handleChange} value={input} placeholder="Escribir mensaje" onKeyDown={handleEnter}/>
                <button className='sendBtn' onClick={handleClick}>
                    <span className="material-symbols-outlined">
                        send
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Sender