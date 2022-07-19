import app from './src/app'
import sequelize from './src/db.js';
import './src/asociations'
import createRoles from './src/utils/roles';

import './src/models/user.js'
import './src/models/mesage.js'

const PORT = 3001;


sequelize.sync({force: false}).then(() => {
    app.listen(PORT)
    console.log("server listen on port", PORT)
    createRoles()
})
