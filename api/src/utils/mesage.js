import models from '../asociations'
const { Mesage } = models


export async function postMessage(content, userId, roomId){
   try {

    const newMesage = await Mesage.create({content:content, userId: userId, roomId:roomId, time: Date()})

    return newMesage

   } catch (error) {
    return newMesage
   }
}