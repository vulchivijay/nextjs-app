import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ msg: "Welcome to next rest API" })
}