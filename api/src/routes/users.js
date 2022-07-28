import { Router } from "express";
import {getUsers, getContactList, addContact, createNotification, getNotification, updateNotification} from "../controllers/users"
import verifyToken from "../middlewares/authJwt"


const route = Router()

route.get("/",verifyToken, getUsers)
route.get("/contact-list/:userId", verifyToken, getContactList)
route.post("/add-contact", verifyToken, addContact)
route.post("/notification", verifyToken, createNotification)
route.put("/notification/:id", verifyToken, updateNotification)
route.get("/notification/:userId", verifyToken, getNotification)

export default route