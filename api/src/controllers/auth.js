import { createUserInDb, findUserInDbByField } from '../utils/users'
import bcrypt from "bcryptjs"
import { generateAccessToken, updateRefreshToken, verifyRefreshToken } from '../utils/auth'

export async function createUser(req, res) {
    try {
        const { name, email, password, img } = req.body
        const crypPassword = await bcrypt.hash(password, 10)

        const user = await createUserInDb(name, email, crypPassword, img)

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
         if(!email && !password){
            console.log("no llegan")
            return res.status(200).send({msg:"no llegan datos"})
        }
        const user = await findUserInDbByField("email", email)
        if (user === 404) {
            return res.status(404).send({ msg: "Usuario no existe." })
        }

        // return res.status(200).json({msg:"usuario econtrado", user})

        const isCorrectPassword = await bcrypt.compare(password, user.password)
        if (!isCorrectPassword) return res.status(401).send({ msg: "Contrasela incorrecta" })

        const accesToken = generateAccessToken(user)
        const refreshToken = await updateRefreshToken(user)
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'none', maxAge: 24 * 60 * 60 * 1000 })

        return res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                img: user.img,
                role: user.role,
                // refreshToken: user.refreshToken
            },
            accessToken: accesToken,
        })

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}


export const handleRefreshToken = async (req, res, next) => {
    const cookies = req.cookies;
    console.log("refresh")
    console.log(cookies)
    if (!cookies) return res.send({ msg: "no llega cookie" })
    if (!Object.keys(cookies).length || !Object.keys(cookies.jwt ? cookies.jwt : {}).length) return res.sendStatus(401) // unauthorized
    const refreshToken = cookies.jwt;
    try {
        const user = await findUserInDbByField('refreshToken', refreshToken);
        if (!user) return next({ status: 403, message: 'El usuario con ese token no existe' })
        let newToken = verifyRefreshToken(user);
        if (typeof newToken === 'string') res.send({ accessToken: newToken })
        else throw newToken   // obj error {status, message}
    } catch (error) { return next(error) }
}

export const getUserAuth = async (req, res, next) => {
    const cookies = await req.cookies;
    console.log("getAuth")
    console.log(cookies)
    if (!cookies.jwt) return res.sendStatus(401) // unauthorized
    const refreshToken = cookies.jwt;
    try {
        const user = await findUserInDbByField('refreshToken', refreshToken);
        if (!user) return next({ status: 404, message: 'No se encontro una sesion activa' })
        let newToken = verifyRefreshToken(user);
        if (typeof newToken === 'string') {
            return res.send({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    img: user.img,
                    role: user.role,
                },
                accessToken: newToken
            })
        } else throw newToken   // obj error {status, message}

    } catch (error) { return next(error) }
}


export const logOut = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies.jwt) return res.status(401).send(`No token found, unauthorized`);
    const refreshToken = cookies.jwt;
    try {
        const user = await findUserInDbByField("refreshToken", refreshToken);
        if (!user) {
            res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            return res.sendStatus(204);
        }
        await updateRefreshToken(user, true);
        res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.sendStatus(204);
    } catch (error) {
        return next(error);
    }
};


