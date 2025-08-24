import { NextResponse } from "next/server";
import dbConnect from '@/database/dbconnect';
import User from '@/modals/user';
import bcrypt from "bcryptjs";
import { generateToken } from "@/app/lib/generatejwt";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  try {
    await dbConnect();
    const user = await User.findOne({ email })
    console.log('1. ', user);
    if (!user) {
      throw new Error('Wrong Email');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('2 ', passwordMatch);
    if (!passwordMatch) {
      throw new Error('Wrong Password');
    }

    // JWT token creation
    const payload = { userId: user.id, name: user.name }; // Example payload
    const token = generateToken(payload);
    return NextResponse.json({ message: 'Login successful', token, name: user.name });
  }
  catch (e) {
    console.log(e);
  }
}