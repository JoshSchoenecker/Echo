import store from "../store.js";
import _userService from "../Services/UserService.js";

// @ts-ignore
function _draw() {
  let user = store.State.user;
  console.log(user);
}

//Public
export default class UserController {
  constructor() {
    store.subscribe("user", _draw);
  }

  create() {
    // @ts-ignore
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
    })
      .queue([
        {
          title: "Create an Echo Account",
          text: "What is your username?"
        }
      ])
      .then((result) => {
        if (result.value) {
          let user = {
            username: result.value.toString()
          };
          // @ts-ignore
          Swal.fire({
            title: "Echo Account Created",
          });
          console.log(user)
          _userService.create(user);
        }
      });
  }
}
