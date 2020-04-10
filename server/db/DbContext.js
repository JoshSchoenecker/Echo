import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import mongoose from "mongoose";

class DbContext {
    Posts = mongoose.model("Post", PostSchema);
    Comments = mongoose.model("Comment", PostSchema);
}

export const dbContext = new DbContext();