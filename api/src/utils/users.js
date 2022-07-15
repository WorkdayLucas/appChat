import models from '../asociations'
const { User, Role } = models

export async function createUserInDb(name, email, password) {
    try {
        const isExistUser = await User.findOne({
            where:{
                email: email
            }
        })

        if(isExistUser){
            return "Ya hay un usuario con este email"
        }

        const user = await User.create({ name, email, password, roleId: 2 })
        return user
    } catch (error) {
        console.log(error)
        return "fallido"
    }
}

export async function findUserInDb(email) {
    try {
        const user = await User.findOne({
            include: {
                model: Role
            },
            where:{
                email: email
            }
        })

        if(!user){
            return 404
        }
        return user
    } catch (error) {
        console.log(error)
        return "fallido"
    }
}