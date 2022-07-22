import {postMessage} from '../utils/mesage'

export async function getMesagesByUser (req, res, next){
    res.status(200).send({msg: "Mensajes"})
}

export async function createMesageByUser (req, res, next){
    const {content, userId, roomId} = req.body
    try {
        const mesage = await postMessage(content, userId, roomId)
        res.status(200).json({msg:"creado con exito", mesage})
    } catch (error) {
        res.status(404).json({error:"creado con exito", mesage})
    }
}

export async function deleteMesageByUser (req, res, next){
    res.status(200).send({msg: "eliminar mensajes"})
}