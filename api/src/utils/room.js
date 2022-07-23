import models from '../asociations'
const { Room, User, Mesage } = models

export async function postRoom(nameContact, contactId, usersId, userName) {
    try {
        const roomName = nameContact + "-" + userName
        const room = await Room.create({ name: roomName })

        const userDb = await User.findOne({
            where: {
                id: usersId
            }
        })

        const contactdb = await User.findOne({
            where: {
                id: contactId
            }
        })


        room.addUsers([userDb, contactdb])

        return `room ${roomName} creado`
    } catch (error) {

        if(error.original?.detail?.includes("Ya existe la llave"))
        return { error: "Ya existe un room en comun con este usuario2"}

        return error
    }
}

export async function findRoomFromDB(roomName, userName) {
    try {

        const roomName1 = roomName + "-" + userName;
        const roomName2 = userName + "-" + roomName;

        console.log(roomName1, roomName2)
        
        const search1 = await Room.findOne({
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password', 'refreshToken'] }
                },
                { model: Mesage }
            ],
            where: {
                name: roomName1
            }
        })

        if(search1){
            return {
                id: search1.id,
                name: roomName,
                users: search1.users,
                mesages: [...search1.mesages]
            }
        }

        const search2 = await Room.findOne({
            include: [
                {
                    model: User,
                    attributes: { exclude: ['password', 'refreshToken'] }
                },
                { model: Mesage }
            ],
            where: {
                name: roomName2
            }
        })

        if(search2){
            return {
                id: search2.id,
                name: roomName,
                users: search2.users,
                mesages: [...search2.mesages]
            }
        }



        return false
       
    } catch (error) {
        console.log(error)
        return "algo fallo"
    }
}
