import { NextResponse } from "next/server";
import { User } from "./models/User";
import { connectDB } from "./lib/mongodb";
import bcrypt from "bcryptjs";
import generateToken 