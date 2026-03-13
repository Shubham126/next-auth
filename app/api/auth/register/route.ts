import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {

  try {

    const { name, email, password } = await req.json()

    await connectDB()

    const userExists = await User.findOne({ email })

    if (userExists) {
      return NextResponse.json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    return NextResponse.json({
      message: "User created",
      user
    })

  } catch (error) {
    return NextResponse.json({ error })
  }
}