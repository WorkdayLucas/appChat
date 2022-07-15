import {postRoom} from '../utils/room'

export async function createRoom(req,res){
    const {name, users} = req.body
    try {
        const room = await postRoom(name, users)

        res.status(200).json({msg: room})
    } catch (error) {
        res.status(400).json({msg: room})
    }
}