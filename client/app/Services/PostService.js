import _store from "../store.js";
import Post from "../Models/Post.js"

// @ts-ignore axios
let _api = axios.create({
  baseURL: '//localhost:3000/api/posts',
  timeout: 3000
})
class PostService {

  create(newPostObject) {
    _api.post('', newPostObject)
      .then(res => {
        //NOTE two ways of handling updating our data
        //First way is adding the returned new car we created into our current cars array
        //pros: only one call to db (our post method) cons: we cant trust that our local array contains all the same information as our DB. Someone else could of added a car between our get and post request
        
        let newPost = new Post(res)
        console.log(newPost)
        // let cars = [newCar, ..._store.State.cars]
        // _store.commit('cars', cars)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
      })
      .catch(err => console.error(err))
  }

}

const service = new PostService();
export default service;
