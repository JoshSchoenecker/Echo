import express, {request} from "express";
import BaseController from "../utils/BaseController";
import { usernamesService } from "../services/UsernamesService";
import { BadRequest } from "../utils/Errors";

export class UsersController extends BaseController {
    constructor(){
        super("api/users")
        this.router
        .post('', this.create)
    } 

    async create(req, res, next){
        try {let user = await usernamesService.create(req.body)
        res.send(user)
    } catch (error){
        next(error)
    }
}
}