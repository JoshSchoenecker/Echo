import mongoose from "mongoose";
import Username from "./Username";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Post = new Schema(
  {
    username: {type: ObjectId, ref: Username},
    title: {type: String, required: true},
    description: {type: String, required: true},
    supportCount: {type: Number, required: true, default: 0},
    disregardCount: {type: Number, required: true, default: 0}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;  