import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetRoomQuery } from '../../../features/users/roomsApiSlice'
import { selectCurrentContact, selectRoomToCall, selectRoomVisibility } from '../../../features/users/utilSlice'
import Mesages from './mesages/Mesages'
import RoomNavBar from './roomNavBar/RoomNavBar'
import Sender from './senderMsg/Sender'
import './Room.css'
import { selectCurrentUser } from '../../../features/auth/authSlice'
import { useState } from 'react'
import { useGetUserConnectionStatusMutation } from '../../../features/users/usersApiSlice'

const Room = () => {

  const user = useSelector(selectCurrentUser)
  const currentContact = useSelector(selectCurrentContact)
  const roomToCall = useSelector(selectRoomToCall)
  const { data, refetch } = useGetRoomQuery({nameRoom:roomToCall, userName:user.name},{refetchOnMountOrArgChange: true})
  const [getUserConnectionStatus] = useGetUserConnectionStatusMutation()
  const [contactConnection, setContacConnection] = useState("0")
  useEffect(() => {
    refetch()
  }, [roomToCall])

  const [act, setAct] = useState(0) 
 
  useEffect(() => {
    // console.log("Escuchando mensajes...")
    refetch()
    if(currentContact){
      getUserConnectionStatus({userId: currentContact.id}).then((res)=>{setContacConnection(res.data.stateActive)})
    } 
  }, [act])
  if(data?.room) setTimeout(()=>{setAct(act+1)},1000)

  const visibility = useSelector(selectRoomVisibility)

  useEffect(()=>{
  },[visibility])

  const content = data?.room ?
    (<div className={`roomContainer ${visibility}` }>
      <RoomNavBar contactImg={data?.room.users[1].img} contactName={data?.room?.name} connection={contactConnection}/>
      <Mesages mensajes={data?.room?.mesages || []} />
      <Sender roomId={data?.room?.id}/>
    </div>) : <div></div>

  return content
}

export default Room