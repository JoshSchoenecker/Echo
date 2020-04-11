import _store from "../store.js";
import User from "../Models/User.js";

// @ts-ignore axios
let _api = axios.create({
  baseURL: "//localhost:3000/api/users",
  timeout: 3000,
});

class UserService {
  create(newUser) {
    _api
      .post("", newUser)
      .then((res) => {
        let newUser = new User(res.data);
        console.log(newUser);
        _store.commit("user", newUser);
        // let cars = [newCar, ..._store.State.cars]
        // _store.commit('cars', cars)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
      })
      .catch((err) => console.error(err));
  }
}

const service = new UserService();
export default service;
