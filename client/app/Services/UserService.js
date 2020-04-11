import _store from "../store.js";
import User from "../Models/User.js";

// @ts-ignore axios
let _api = axios.create({
  baseURL: "//localhost:3000/api/users",
  timeout: 8000,
});

class UserService {

  constructor() {
  }
  create(newUser) {
    _api
      .post("", newUser)
      .then((res) => {
        let newUser = new User(res.data);
        _store.commit("user", newUser);
        _store.saveState()
        // let cars = [newCar, ..._store.State.cars]
        // _store.commit('cars', cars)
        //NOTE we could just call get cars again and it would handle getting all the cars and saving the state and redrawing.
        // this.getCars()
      })
      .catch((err) => console.error(err));
  }

  getUser() {
    _api
      .get('')
      .then((res) => {
        console.log(res.data)
        let user = new User(res.data);
        console.log(user)
        _store.commit('user', user)
      })
      .catch((err) => console.error(err));
  }

}

const service = new UserService();
export default service;
