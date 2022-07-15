import { createUserInDb, findUserInDb } from '../utils/users'
import bcrypt from "bcryptjs"
import { generateAccessToken } from '../utils/auth'

export async function createUser(req, res) {
    try {
        const { name, email, password } = req.body
        const crypPassword = await bcrypt.hash(password, 10)

        const user = await createUserInDb(name, email, crypPassword)

        if (user === "Ya hay un usuario con este email") {
            return res.send({ msg: user })
        }

        return res.send({ msg: `Usuario creado con exito`, user })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export async function logUser(req, res) {
    try {
        const { email, password } = req.body
        const user = await findUserInDb(email)
        if (user === 404) {
            return res.status(404).send({ msg: "Usuario no existe." })
        }

        // return res.status(200).json({msg:"usuario econtrado", user})

        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) return res.status(401).send({ msg: "Contrasela incorrecta" })

        const accesToken = generateAccessToken(user)

        return res.status(200).json({
            data: {
                name: user.name,
                email: user.email,
                role: user.role,
            },
            accesToken: accesToken,
        })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}