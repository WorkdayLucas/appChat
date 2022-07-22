import { postRoom, findRoomFromDB } from '../utils/room'

export async function createRoom(req, res) {
      try {    
        const { nameContact, contactId, usersId, userName } = req.query
        const isRoomExist = await findRoomFromDB(nameContact,userName)
        let room;
        if(!isRoomExist){
            room = await postRoom(nameContact, contactId, usersId, userName)
        }else{
            return res.status(200).json({ msg: "ya existe un room comun con este usuario1" })
        }
        

        res.status(200).json({ msg: room })
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
}

export async function getRoom(req, res) {
   
    try {
        const { roomName, userName } = req.query
        const room = await findRoomFromDB(roomName, userName)

        if(room){
           return res.status(200).json({room:{...room, mesages:[...room.mesages]}})
        }

        return res.status(404).json({ room: "room no encontrado" })
    } catch (error) {
        return res.status(400).json({ err: error })
    } 
}