import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId

const Comment = new Schema(
    {
    username: { type: objectId, ref: "Username", required: true},
    // title: { type: String, required: true },
    description: { type: String, required: true },
    post: {type: objectId, ref: "Post", required: true}},
    { timestamps: true, toJSON: { virtuals: true } });

export default Comment;