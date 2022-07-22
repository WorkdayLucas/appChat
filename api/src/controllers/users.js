import {findUsersInDb, findcontactListInDb, addContactFromDb, findAllUsersInDb} from '../utils/users'

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

