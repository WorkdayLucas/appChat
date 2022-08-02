import {findUsersInDb, findcontactListInDb, addContactFromDb, findAllUsersInDb, postNotificationOnDb, findNotificationInDbByUserId, checkNotification} from '../utils/users'

export async function getUsers(req,res){
    const {search, userId} = req.query
    try{
        let users;
        const contactList = await findcontactListInDb(userId)
        if(search){
            users = await findUsersInDb(search, userId, contactList.contacts)
        }else{
            users = await findAllUsersInDb()
        }

        res.status(200).json({results:users})
    }catch(err){
        res.status(404).send(err)
    }
}

export async function getContactList(req,res){
    const {userId} = req.params
    try{
        const contactList = await findcontactListInDb(userId)
        res.status(200).json({contactList: contactList})
    }catch(err){
        res.status(404).send(err)
    }
}

export async function addContact(req,res){
    const {userId, contactId} = req.query
    try{
        const newContact = await addContactFromDb(userId, contactId)
        res.status(200).json({results:newContact})
    }catch(err){
        console.log(err)
        res.status(404).send(err)
    }
}

export async function createNotification(req,res){
    const {userIdOrigin, userId, notificationTypeId, userNameOrigin} = req.query
    try {
        const newNotification = await postNotificationOnDb(userIdOrigin, userId, notificationTypeId, userNameOrigin)
        
        return res.status(200).send(newNotification)
    } catch (error) {
        return res.status(400).send(error)
    }
}

export async function getNotification(req,res){
    const {userId} = req.params
    try {
        const notifications = await findNotificationInDbByUserId(userId)

        return res.status(200).send(notifications)
        
    } catch (error) {
        return res.status(400).send(error)
    }
}

export async function updateNotification(req,res) {
    const { id } = req.params
    const { set, type, contactId } = req.body
    try {
        let update;
        if (set === "check") {
            update = await checkNotification(id, type, contactId)
        }

        return res.status(200).send(update)
    } catch (error) {
        return res.status(400).send(error)
    }
}
