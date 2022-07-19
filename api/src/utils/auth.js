import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
import models from '../asociations'
const {User} = models

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

export async function updateRefreshToken(user, errase = false){
  let token;
  errase 
  ? token = '' 
  : token = jwt.sign(
        {'UserInfo': {
          'name': user.name,
          'email': user.email
        }},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '1d'}
      )
  await User.update({refreshToken: token}, {where: {name: user.name}})
  return token;
}

export function verifyRefreshToken(user){
  const token = user.refreshToken;
  let newToken= ''
  jwt.verify(
    token,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
    let decodedUserInfo = decoded
    if (err ||user.name !== decodedUserInfo.UserInfo.name)  newToken =({status:403, message:`You don't have access. Token no longer valid`})
    else newToken = generateAccessToken(user)
  }
  )
  return newToken;
}