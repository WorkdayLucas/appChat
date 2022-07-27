import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetRoomQuery } from '../../../features/users/roomsApiSlice'
import { selectRoomToCall, selectRoomVisibility } from '../../../features/users/utilSlice'
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
  }, [roomToCall])
 
  if(data?.room) setTimeout(()=>{refetch()},1100)

  const visibility = useSelector(selectRoomVisibility)

  useEffect(()=>{
    console.log(visibility)
  },[visibility])

  const content = data?.room ?
    (<div className={`roomContainer ${visibility}` }>
      <RoomNavBar contactImg={data?.room.users[1].img} contactName={data?.room?.name} />
      <Mesages mensajes={data?.room?.mesages || []} />
      <Sender roomId={data?.room?.id}/>
    </div>) : <div></div>

  return content
}

export default Room