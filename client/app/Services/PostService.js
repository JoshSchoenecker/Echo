import _store from "../store.js";
import Post from "../Models/Post.js";
import store from "../store.js";

// @ts-ignore axios
let _api = axios.create({
  baseURL: "//localhost:3000/api/posts",
  timeout: 8000,
});
class PostService {
  create(newPostObject) {
    _api
      .post("", newPostObject)
      .then((res) => {
        let newPost = new Post(res.data);
<<<<<<< HEAD
        let posts = [newPost, ...store.State.posts]
        store.commit('posts', posts)
=======
        console.log("newPost", newPost);
        
        store.State.posts.push(newPost);

        // store.commit('posts', posts)
        console.log(store.State.posts);
        // let cars = [newCar, ..._store.State.cars]
        // _store.commit('cars', cars)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
>>>>>>> 1b8034efb677f1bfdf96e946adac1b9da36661d4
      })
      .catch((err) => console.error(err));
  }

  getPosts() {
    _api
      .get('')
      .then((res) => {
        let posts = res.data.map(post => new Post(post))
        store.commit('posts', posts)
        console.log(store.State.posts)
      })
      .catch((err) => console.error(err))
  }

  constructor() {
    this.getPosts()
  }
}

const service = new PostService();
export default service;
