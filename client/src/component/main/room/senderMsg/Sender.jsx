import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../features/auth/authSlice'
import { useCreateMesageMutation } from '../../../../features/users/roomsApiSlice'
import { useCreateNotificationMutation } from '../../../../features/users/usersApiSlice'
import { selectCurrentContact } from '../../../../features/users/utilSlice'
import './Sender.css'

const Sender = ({ roomId }) => {
    const user = useSelector(selectCurrentUser)
    const [input, setInput] = useState("")
    const [createMesage] = useCreateMesageMutation()
    const [createNotification] = useCreateNotificationMutation()
    const contactId = useSelector(selectCurrentContact)

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        if (input.trim() !== "") {
            createMesage({ content: input, userId: user.id, roomId: roomId }).then((result)=>{
                if(result.data.msg==="creado con exito"){
                    console.log("se crea noti de mensaje")
                    createNotification({
                        userIdOrigin: user.id,
                        userId: contactId.id,
                        notificationTypeId: 1,
                        userNameOrigin: user.name
                    });
                }

            })
            setInput("")
        }
    }

    const handleEnter = (e) => {
         if(e.key==="Enter" && input.trim() !== ""){
            createMesage({ content: input, userId: user.id, roomId: roomId }).then((result)=>{
                if(result.data.msg==="creado con exito"){
                    createNotification({
                        userIdOrigin: user.id,
                        userId: contactId.id,
                        notificationTypeId: 1,
                        userNameOrigin: user.name
                    });
                }

            })
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