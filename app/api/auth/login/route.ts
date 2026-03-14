import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { User } from "@/models/User"
import bcrypt from "bcryptjs"
import { generateToken } from "@/utils/auth"

export async function POST(req: Request) {

  const { email, password } = await req.json()

  await connectDB()

  const user = await User.findOne({ email })

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" })
  }

  const token = generateToken(user._id.toString())

  const response = NextResponse.json({
    message: "Login successful",
  })

  response.cookies.set("token", token, {
    httpOnly: true,
  })

  return response
}