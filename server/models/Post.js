import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    author: {type: String, required: true},
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;

