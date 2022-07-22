import { Router } from "express";
import {createRoom, getRoom} from "../controllers/room"
import verifyToken from "../middlewares/authJwt"

const route = Router()


route.get("", getRoom)
route.post("/create", verifyToken, createRoom)


export default route
