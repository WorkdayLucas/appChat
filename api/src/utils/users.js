import models from '../asociations'
const { User, Role, Contact_list, } = models
import { Op } from 'sequelize'

export async function createUserInDb(name, email, password, img) {
    try {
        let err = {};
        const isEmailUsed = await User.findOne({
            where: {
                email: email
            }
        })

        if (isEmailUsed) {
            err.email = "Ya existe este email"
        }

        const isUsernameUsed = await User.findOne({
            where: {
                name: name
            }
        })

        if (isUsernameUsed) {
            err.username = "Ya existe este username"
        }

        if(err.email || err.username){
            return {err}
        }

        const user = await User.create({ name, email, password, roleId: 2, img })

        const contactsList = await Contact_list.create({ name: name, userId: user.dataValues.id })

        return user
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function findUsersInDb(search, userId, contacts) {
    try {
        const dbUsers = await User.findAll()

        const contactsId = await contacts.map((contact)=>contact.id)
        contactsId.push(Number(userId))
        console.log(contactsId)
        const filter = dbUsers.filter((user) => {
            const name = user.name
            return name.trim().toLowerCase().includes(search.trim().toLowerCase()) && !contactsId.includes(user.id)
        })

        const users = await filter.map((user) => ({ id: user.id, name: user.name, email: user.email, img:user.img }))

        return users
    } catch (error) {
        console.log(error)
        return "fallido"
    }
}

export async function findUserInDbByField(field, value) {
    try {
        const user = await User.findOne({
            include: {
                model: Role
            },
            where: {
                [field]: value
            }
        })

        if (!user) {
            return 404
        }
        return user
    } catch (error) {
        console.log(error)
        return "fallido"
    }
}

export async function findcontactListInDb(userId) {
    try {
        const contacListDB = await Contact_list.findOne({
            include: { model: User, as: "contact" },
            where: { userId: userId }
        })

        const contacts = await contacListDB.dataValues.contact.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            img: user.img
        }))

    

        return {
            id: contacListDB.dataValues.id,
            name: contacListDB.dataValues.name,
            userId: contacListDB.dataValues.userId,
            contacts
        }
    } catch (error) {
        return error
    }
}

export async function addContactFromDb(userId, contactId) {
    try {
        const userContactList = await Contact_list.findOne({
            where: { userId: userId }
        })

        const newContact = await User.findOne({
            where: { id: contactId }
        })

        await userContactList.addContact(newContact)

        return { msg: `${newContact.name} agregado a la lista de usuarios` }
    } catch (error) {
        return error
    }
}

export async function findAllUsersInDb() {
    try {
        const allUsers = await User.findAll()

        const result = await allUsers.map((user)=> ({ id: user.id, name: user.name, email: user.email, img:user.img })) 
        return result
    } catch (error) {
        return error
    }
}
