export async function getMesagesByUser (req, res, next){
    res.status(200).send({msg: "Mensajes"})
}

export async function createMesageByUser (req, res, next){
    res.status(200).send({msg: "crear mensajes"})
}

export async function deleteMesageByUser (req, res, next){
    res.status(200).send({msg: "eliminar mensajes"})
}