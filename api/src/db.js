import Sequelize from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/appchat`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})



export default sequelize