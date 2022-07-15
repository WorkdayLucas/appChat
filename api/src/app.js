import express from "express"
import morgan from "morgan"
import mensages from "./routes/mesages"
import auth from "./routes/auth"
import room from "./routes/room"
import createRoles from "./utils/roles"

const app = express()
createRoles()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/mesages", mensages)
app.use("/api/auth", auth)
app.use("/api/room", room)

export default app



