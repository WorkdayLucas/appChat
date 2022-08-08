import { Router } from "express";
import {getUsers, getContactList, addContact, createNotification, getNotification, updateNotification, updateStatusActive, getStatusConnection} from "../controllers/users"
import verifyToken from "../middlewares/authJwt"


const route = Router()

route.get("/",verifyToken, getUsers)
route.get("/contact-list/:userId", verifyToken, getContactList)
route.post("/add-contact", verifyToken, addContact)
route.post("/notification", verifyToken, createNotification)
route.put("/notification/:id", verifyToken, updateNotification)
route.get("/notification/:userId", verifyToken, getNotification)
route.get("/statusConnection/:userId", verifyToken, getStatusConnection)
route.put("/statusActive/:userId", verifyToken, updateStatusActive)

export default route