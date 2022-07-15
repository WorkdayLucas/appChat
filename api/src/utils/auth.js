import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export function generateAccessToken(user){
    return jwt.sign({
      'UserInfo':{
        'name': user.name,
        'email': user.email,
        'role':user.role,
        "id": user.id,
      }
    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'})
}