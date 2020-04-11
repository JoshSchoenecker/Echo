import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import UserSchema from "../models/User";
import mongoose from "mongoose";

class DbContext {
    Posts = mongoose.model("Posts", PostSchema);
    Comments = mongoose.model("Comment", CommentSchema);
    Users = mongoose.model("User", UserSchema)
}

export const dbContext = new DbContext();