import models from '../asociations'
const { Mesage } = models


export async function postMessage(content, userId, roomId) {
   try {

      const newMesage = await Mesage.create({ content: content, userId: userId, roomId: roomId, time: Date(), checked: "0" })

      return newMesage

   } catch (error) {
      return newMesage
   }
}

export async function checkMesage(id) {
   try {
      const updateCheck = await Mesage.update({
         checked: "1"
      }, {
         where: {
            id: id
         }
      })

      return updateCheck

   } catch (error) {
      return error
   }
}