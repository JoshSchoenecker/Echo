import store from "../store.js";
import _postService from "../Services/PostService.js";

//Private
function _draw() {
  let posts = store.State.posts;
  console.log("getting posts", posts);
  let template =""
  posts.forEach(post => template += post.template)
  document.getElementById("post-space").innerHTML = template
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
    _postService.create(newPostObject)
    formData.reset()
  }

  
}
