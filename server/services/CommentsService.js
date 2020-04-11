import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { query } from "express";

class CommentsService {
    async getCommentsByPostId(query = {}) {
      let comments = await dbContext.Comments.find(query)
      return comments
    }

    async getAll(query = {}) {
        let comment = await dbContext.Comments.find(query);
        return comment ;
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

    async remove(commentId) {
        let comment = await dbContext.Comments.findByIdAndDelete(commentId)
        return comment
    }
}

export const commentsService = new CommentsService();