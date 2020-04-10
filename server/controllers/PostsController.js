import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostsService";
import { BadRequest } from "../utils/Errors";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .get("/:postId", this.getById)
      .post("", this.create)
      .put("/:postId", this.edit)
      .delete("/:postId", this.remove)
  }

  async edit(req, res, next) {
    try {
      let post = await postsService.edit(req.params.postId, req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      let posts = await postsService.getAll()
      res.send(posts)
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let post = await postsService.create(req.body);
      res.send(post)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next){
    try {
      let post = await postsService.getById(req.params.postId)
      if (!post) {
        throw new BadRequest("Invalid post Id")
      }
      res.send(post)
    } catch (error){
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      let post = await postsService.remove(req.params.postId)
      res.send('Deleted: ', post)
    } catch (error){
      next(error)
    }
  }
}