import { NextResponse } from "next/server";
import { User } from "./models/User";
import { connectDB } from "./lib/mongodb";
import bcrypt from "bcryptjs";
import { generateToken } from "./utils/auth";

export async function POST(){
    const response = NextResponse.json({
        message: "Logged out successfully"
    })

    response.cookies.set("token", "", {
        expires: new Date(0)
    })
}