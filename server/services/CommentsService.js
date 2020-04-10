import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {

    async getAll(query = {}) {
        let comments = await dbContext.Comments.find(query);
        return comments;
    }

    async create(body) {
        let comment = await dbContext.Comments.create(body);
        return comment
    }

    async getById(id) {
        let comment = await dbContext.Comments.findById(id);
        if (!comment) {
            throw new BadRequest("Invalid Id");
        }
        return comment
    }

    async remove(postId) {
        let comment = await dbContext.Comments.findByIdAndDelete(postId)
        return comment
    }
}

export const commentsService = new CommentsService();