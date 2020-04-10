import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId


const Comment = new Schema({
    authorId: { type: ObjectId, required: true },
    comment: { type: String, required: true },
    
}, { timestamps: true, toJSON: { virtuals: true } });

export default Comment;