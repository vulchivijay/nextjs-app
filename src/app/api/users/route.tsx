import { NextResponse } from "next/server";
import dbConnect from '@/database/dbconnect';
import User from '@/modals/user';
import bcrypt from "bcryptjs";

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const { email, password, name } = await request.json();
  try {
    await dbConnect();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: 'Email already exists!'
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    return NextResponse.json({ message: "User created!" });
  }
  catch (e) {
    console.log(e);
  }
}

export async function PUT(request: Request) {
  try {
    //
  }
  catch (e) {
    console.log(e);
  }
}

export async function DELETE(request: Request) {
  try {
    //
  }
  catch (e) {
    console.log(e);
  }
}