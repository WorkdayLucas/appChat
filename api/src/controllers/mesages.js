import { postMessage, checkMesage } from '../utils/mesage'

export async function getMesagesByUser(req, res, next) {
    res.status(200).send({ msg: "Mensajes" })
}

export async function createMesageByUser(req, res, next) {
    const { content, userId, roomId } = req.body
    try {
        const mesage = await postMessage(content, userId, roomId)
        res.status(200).json({ msg: "creado con exito", mesage })
    } catch (error) {
        res.status(404).json({ error: "creado con exito", mesage })
    }
}

export async function deleteMesageByUser(req, res, next) {
    res.status(200).send({ msg: "eliminar mensajes" })
}

export async function updateMesageByUser(req, res, next) {
    const { id } = req.params
    const { set } = req.body
    try {
        let update;
        if (set === "check") {
            update = await checkMesage(id)
        }

        return res.status(200).send(update)
    } catch (error) {
        return res.status(400).send(error)
    }
}