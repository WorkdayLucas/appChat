import { User } from "./models/user";
import { Mesage } from "./models/mesage";
import { Room } from "./models/room";
import { Contact_list } from "./models/contactsList";
import { Role } from "./models/role";


User.hasMany(Mesage)
Mesage.belongsTo(User)

Role.hasMany(User)
User.belongsTo(Role)

User.belongsToMany(Room, {through: 'UserRoom'})
Room.belongsToMany(User, {through: 'UserRoom'})

Room.hasMany(Mesage)
Mesage.belongsTo(Room)


User.hasOne(Contact_list)
Contact_list.belongsTo(User)

User.belongsToMany(Contact_list, {through: 'UserContact_list', as:"contact"})
Contact_list.belongsToMany(Contact_list, {through: 'UserContact_list', as:"contact"})


export default {
    User,
    Room,
    Mesage,
    Contact_list,
    Role
}
