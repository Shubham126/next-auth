import jwt from "jsonwebtoken"

const JWT_TOKEN = process.env.JWT_TOKEN!

export function generateToken(userId: string){
    return jwt.sign({id: userId}, JWT_TOKEN, {
        expiresIn: "7d",
    })
}