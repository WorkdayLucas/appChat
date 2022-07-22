import { Router } from "express";
import {getUsers, getContactList, addContact} from "../controllers/users"
import verifyToken from "../middlewares/authJwt"


const route = Router()

route.get("/",verifyToken, getUsers)
route.get("/contact-list/:userId", verifyToken, getContactList)
route.post("/add-contact", verifyToken, addContact)

export default route