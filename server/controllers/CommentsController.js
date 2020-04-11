import express, { request } from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentsService";
import { BadRequest } from "../utils/Errors";

export class CommentsController extends BaseController {
    constructor() {
        super("api/comments");
        this.router
            .get("", this.getAll)
            .get("/:postId", this.getById)
            .post("", this.create)
            .delete("/:postId", this.remove)
    }
    async getAll(req, res, next) {
        try {
            let comments = await commentsService.getAll()
            res.send(comments)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let comment = await commentsService.create(req.body);
            res.send(comment)
        } catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            let comment = await commentsService.getById(req.params.postId)
            if (!comment) {
                throw new BadRequest("Invalid comment Id")
            }
            res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            let comment = await commentsService.remove(req.params.postId)
            res.send('Deleted: ', comment)
        } catch (error) {
            next(error)
        }
    }
}