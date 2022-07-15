import { Router } from "express";
import {createUser,logUser} from "../controllers/auth"

const route = Router()


route.post("/register", createUser)
route.post("/login", logUser)


export default route