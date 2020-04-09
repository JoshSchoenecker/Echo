import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {
 
  async getAll(query={}) {
    let posts = await dbContext.Posts.find(query);
    return posts;
  }
  
  async create(body){
    let post = await dbContext.Posts.create(body);
    return post
  }

  async getById(id){
    let post = await dbContext.Posts.findById(id);
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post
  }

  async remove(postId) {
    let post = await dbContext.Posts.findByIdAndDelete(postId)
    return post
  }
}

export const postsService = new PostsService();