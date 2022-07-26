import { Router } from "express";
import {getMesagesByUser, createMesageByUser, deleteMesageByUser, updateMesageByUser} from "../controllers/mesages"
import verifyToken from "../middlewares/authJwt"

const route = Router()


route.get("/get/:userId", getMesagesByUser)
route.post("/create", verifyToken, createMesageByUser)
route.put("/update/:id", verifyToken, updateMesageByUser)
route.delete("/delete/", deleteMesageByUser)

export default route