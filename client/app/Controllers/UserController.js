import store from "../store.js";
import _userService from "../Services/PostService.js";

//Private
// @ts-ignore
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
export default class UserController {
  constructor() {
    // store.subscribe("User", _draw);
  }

  create() {
    let userName = "";
    // @ts-ignore
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true
    }).queue([
      {
        title: 'Create an Echo Account',
        text: 'What is your username?'
      },
    ]).then((result) => {
      if (result.value) {
        userName = result.value.toString()
        let user = {
          username: userName
        }
        // @ts-ignore
        Swal.fire({
          title: 'Echo Account Created'
        })
        _userService.create(user)
      }
    })


    // let formData = event.target;
    // console.log(formData);
    // let newPostObject = {
    //   text : formData.textpost.value,
    //   imgUrl : formData.imgUrl.value
    // }
    // _postService.create(newPostObject)
    // formData.reset()
  }
}
