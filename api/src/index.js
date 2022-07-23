import app from './app'
import sequelize from './db.js';
import './asociations'
import createRoles from './utils/roles';
// import mockData from './mock/mock'
import dotenv from 'dotenv'
dotenv.config()

import './models/user.js'
import './models/mesage.js'

const {PORT} = process.env


sequelize.sync({force: true}).then(() => {
    app.listen(PORT)
    console.log("server listen on port", PORT)
    createRoles()
    // mockData()
})
