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
            const mensajes = [...search1.mesages].sort((x, y)=>{
                if (x.id < y.id) { return -1; }
                if (x.id > y.id) { return 1; }
                return 0;
            })
            return {
                id: search1.id,
                name: roomName,
                users: search1.users,
                mesages: mensajes,
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

            const mensajes = [...search2.mesages].sort((x, y)=>{
                if (x.id < y.id) { return -1; }
                if (x.id > y.id) { return 1; }
                return 0;
            })

            return {
                id: search2.id,
                name: roomName,
                users: search2.users,
                mesages: mensajes
            }
        }



        return false
       
    } catch (error) {
        console.log(error)
        return "algo fallo"
    }
}
