import app from './app'
import sequelize from './db.js';
import './asociations'
import createRoles from './utils/roles';
import createTypes from './utils/notificationsTypes';
// import mockData from './mock/mock'
import dotenv from 'dotenv'
dotenv.config()

import './models/user.js'
import './models/mesage.js'

const {PORT, FORCE} = process.env


sequelize.sync({force: FORCE==="1"? true : false}).then(() => {
    app.listen(PORT)
    console.log("server listen on port", PORT)
    createRoles()
    createTypes()
    // mockData()
})
