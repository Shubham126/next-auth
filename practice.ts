import mongoose, {Schema, model, models} from "mongoose"

export interface IUser {
    name: string
    email: string
    password: string
}

const UserSchema = new Schema<Iuser>(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        }
        password
    }
)