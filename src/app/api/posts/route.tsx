import { NextResponse } from "next/server";
import dbConnect from '@/database/dbconnect';
import Post from '@/modals/post';

export async function GET() {
  await dbConnect();
  const posts = await Post.find({});
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, body, author } = await request.json();
  try {
    await dbConnect();
    const titleFound = await Post.findOne({ title });
    if (titleFound) {
      return {
        error: 'Title already exists!'
      }
    }
    const post = new Post({
      title,
      body,
      author,
    });
    const savedPost = await post.save();
    return NextResponse.json({ message: "Post created!" });
  }
  catch (e) {
    console.log(e);
  }
}