import mongoose, { Schema, model } from "mongoose";

export interface PostDocument {
  _id: string;
  title: string;
  body: string;
  author: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema<PostDocument>({
  title: {
    type: String,
    required: [true, "Post title is required!"]
  },
  body: {
    type: String,
    required: [true, "Post descriptions is required!"]
  },
  author: {
    type: String,
  },
},
  {
    timestamps: true,
  }
);

const Post = mongoose.models?.Post || model<PostDocument>('Post', PostSchema);
export default Post;