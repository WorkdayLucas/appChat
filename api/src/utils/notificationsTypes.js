import models from '../asociations'
const { NotificationType } = models

export default async function createTypes(){

    const types = ["Mensaje", "Agendado", "Coneccion"]
    let i = 0


    while(i<types.length){
        const isTypeExist = await NotificationType.findOne({
            where:{
                name: types[i]
            }
        })

        if(!isTypeExist){
           await NotificationType.create({name: types[i]})
        }
        i++
    }

}