import store from "../store.js";
import _userService from "../Services/UserService.js";

//Private
// @ts-ignore
function _draw() {
  let values = store.State.values;
  console.log(values);
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
