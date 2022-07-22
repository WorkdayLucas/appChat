import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetRoomQuery } from '../../../features/users/roomsApiSlice'
import { selectRoomToCall } from '../../../features/users/utilSlice'
import Mesages from './mesages/Mesages'
import RoomNavBar from './roomNavBar/RoomNavBar'
import Sender from './senderMsg/Sender'
import './Room.css'
import { selectCurrentUser } from '../../../features/auth/authSlice'

const Room = () => {

  const user = useSelector(selectCurrentUser)
  const roomToCall = useSelector(selectRoomToCall)
  const { data, refetch } = useGetRoomQuery({nameRoom:roomToCall, userName:user.name})
  useEffect(() => {
    refetch()
    console.log("data")
    console.log(data)
  }, [roomToCall])
 
  if(data?.room) setTimeout(()=>{refetch(); console.log("escuchando..")},1100)

  const content = data?.room ?
    (<div className='roomContainer'>
      <RoomNavBar contactImg={data?.room.users[1].img} contactName={data?.room?.name} />
      <Mesages mensajes={data?.room?.mesages || []} />
      <Sender roomId={data?.room?.id}/>
    </div>) : <div></div>

  return content
}

export default Room