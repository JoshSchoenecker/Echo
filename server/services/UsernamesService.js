import {dbContext} from '../db/DbContext';
import {BadRequest} from '../utils/Errors';

class UsernamesService {
    async create(body){
        let user = await dbContext.Users.create(body)
        return user
    }
}
export const usernamesService = new UsernamesService()