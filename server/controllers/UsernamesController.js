import express, {request} from "express";
import BaseController from "../utils/BaseController";
import { usernamesService } from "../services/UsernamesService";
import { BadRequest } from "../utils/Errors";

export class UsernamesController extends BaseController {
    constructor(){
        super("api/usernames")
        this.router
    } 


    async create(req, res, next){
        try {let user = await usernamesService.create(req.body)
        res.send(user)
    } catch (error){
        next(error)
    }
}
}