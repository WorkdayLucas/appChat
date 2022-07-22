import { Router } from "express";
import {createUser, logUser, handleRefreshToken, getUserAuth, logOut} from "../controllers/auth"
import verifyToken from "../middlewares/authJwt";

const route = Router()


route.post("/register", createUser)
route.post("/login", logUser)
route.get('/refresh-token', handleRefreshToken)
route.get('/user', getUserAuth)
route.get('/logout', verifyToken, logOut)


export default route