import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import models from '../asociations'
const { User } = models
dotenv.config()

export default async function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const bearer = req.headers.authorization?.split(' ')[0]


        if (!token || bearer !== 'Bearer') return res.status(403).send({ msg: "No token provided" })

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        req.userId = decoded.UserInfo.id
        const isUserExist = await User.findOne({
            where: {
                id: req.userId
            }
        })

        if (!isUserExist) {
            return res.status(404).send({ msg: "No user finded, invalid token" })
        }

        next()
    } catch (error) {
        return res.status(404).send({ error })
    }
} 