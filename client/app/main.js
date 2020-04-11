import ValuesController from "./Controllers/ValuesController.js";
import PostController from "./Controllers/PostController.js";
import UserController from "./Controllers/UserController.js";

class App {
  valuesController = new ValuesController();
  postController = new PostController();
  userController = new UserController();
}

window["app"] = new App();
