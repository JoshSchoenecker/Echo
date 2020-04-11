import store from "../store.js";
import _postService from "../Services/PostService.js";

//Private
function _draw() {
  let posts = store.State.posts;
  console.log(posts);
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
      text : formData.textpost.value,
      imgUrl : formData.imgUrl.value
    }
    _postService.create(newPostObject)
    formData.reset()
  }
}
