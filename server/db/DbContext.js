import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import UsernameSchema from "../models/Username";
import mongoose from "mongoose";

class DbContext {
    Posts = mongoose.model("Post", PostSchema);
    Comments = mongoose.model("Comment", CommentSchema);

    Username = mongoose.model("UserName", UsernameSchema)
}

export const dbContext = new DbContext();