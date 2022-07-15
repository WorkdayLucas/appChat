import models from '../asociations'
const {Room, User} = models

export async function postRoom(name, users){
    try {
        const room = await Room.create({name}) 

        const usersDb = await User.findAll({
            where:{
                id: users
            }
        })
 
      
        room.addUsers(usersDb)
       
        return "room creado"
    } catch (error) {
        console.log(error)
        return "algo fallo"
    }
}