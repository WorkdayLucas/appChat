import models from '../asociations'
const { Role } = models

export default async function createRoles(){

    const roles = ["Administrador", "usuario"]
    let i = 0


    while(i<roles.length){
        const isRoleExist = await Role.findOne({
            where:{
                name: roles[i]
            }
        })

        if(!isRoleExist){
           await Role.create({name: roles[i]})
        }
        i++
    }

}