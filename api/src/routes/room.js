import { Router } from "express";
import {createRoom} from "../controllers/room"

const route = Router()

route.post("/create", createRoom)

export default route