import store from "../store.js";
import _postService from "../Services/PostService.js";

//Private
function _draw() {
  let posts = store.State.posts;
  console.log("getting posts", posts);
}

//Public
export default class PostController {
  constructor() {
    store.subscribe("posts", _draw);
  }

  create(event) {
    event.preventDefault();
    let formData = event.target;
    console.log(formData);
    let newPostObject = {
      description : formData.textpost.value,
      image : formData.imgUrl.value,
      username : store.State.user.id,
      author : store.State.user.username
    }
    console.log(newPostObject);
    
    _postService.create(newPostObject)
    formData.reset()
  }
}
